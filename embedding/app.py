from flask import Flask, render_template, url_for, request
import sys
app = Flask(__name__)

 

@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html")



@app.route('/result',methods=['POST', 'GET'])
def result():

    medlist = request.form.getlist("ip")
    targ = request.form.get('tr')
    targsuc = 0
    medsuc = 0
    print(medlist, targ, targincompat(medlist, targ), file=sys.stderr)
    if (len(medlist) != 0):
        processed = processmedlist(medlist)
        if (targ):
            target = targ
            targincomplist = targincompat(processed, targ)
            if (len(targincomplist) != 0):
                #restarg = totext(targincomplist)
                restarg = translate(targincomplist) #testing
                targsuc = 1
        else:
            target = 0
        if (len(medlist) > 1):
            medincomplist = medlistincompat(processed)    
            if (len(medincomplist) != 0):
                resmed = translate(medincomplist) #testing
                #resmed = totext(medincomplist)
                medsuc = 1
    if (targsuc == 0): restarg = 0
    if (medsuc == 0): resmed = 0
    print(resmed)

    return render_template('index.html', restarg = restarg, resmed = resmed, target = target, submitted = 1)

def processmedlist(medlist):
    processed = []
    for j in [i for i in medlist if i]:
        if j not in processed:
            processed.append(j)
    return processed
    
def targincompat(medlist, targ):
    targincomparr = []
    #print(targincomparr)
    for i in range(0, len(medlist)):
        targincomparr.append([0,0])
        targincomparr[i][0] = medlist[i]
        targincomparr[i][1] = machinelearning(medlist[i], targ)

    return targincomparr

def medlistincompat(medlist):
    index = 0
    medlistincomplist = []
    #print(len(medlistincomplist), len(medlist))
    for i in range(0, len(medlist)):
        for j in range(i+1, len(medlist)):
            medlistincomplist.append([0,0,0])
            print("oneiter")
            medlistincomplist[index][2] = machinelearning(medlist[i], medlist[j])
            medlistincomplist[index][0] = medlist[i]
            medlistincomplist[index][1] = medlist[j]
            index+=1
    #print(len(medlistincomplist))
    return medlistincomplist

def machinelearning(one, two):
    return 1

def orderlist(incomplist):
    return sorted(incomplist,key=lambda x: x[len(incomplist[0])-1])

def totext(incomplist):
    restxt = []
    orderlist(incomplist)
    thedict = {
        1 : 'minor',
        2 : 'moderate',
        3 : 'major'
    }
    if (len(incomplist[0]) == 2):
        for i in range(0, len(incomplist)):
            if (incomplist[i][1] != 0):
                restxt.append('its incompatibility with ' + incomplist[i][0] + ' is ' + thedict[incomplist[i][1]] + '\n')
            else:
                break
    if (len(incomplist[0]) == 3):
        for i in range(0, len(incomplist)):
            print(len(incomplist))
            if (incomplist[i][2] != 0):
                restxt.append('the incompatibility between ' + incomplist[i][0] + ' and ' + incomplist[i][1] + ' is ' + thedict[incomplist[i][2]] + '\n')
            else:
                break
    return restxt

#testing function
def translate(incomplist):
    thedict = {
        1 : 'minor',
        2 : 'moderate',
        3 : 'major'
    }
    for i in range(len(incomplist)):
        token = incomplist[i][len(incomplist[0])-1]
        incomplist[i].pop()
        incomplist[i].append(thedict[token])
    return incomplist


if __name__ == "__main__":
    app.run(debug=True)

