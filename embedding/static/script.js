var knownmedicine = ['Naltrexone','Abacavir','Aluminum hydroxide','Aprepitant','Calcium acetate','Calcium carbonate','Dolutegravir','Cimetidine','Clarithromycin','Clotrimazole','Dexamethasone','Lamivudine','Magnesium sulfate','Metformin','Miconazole','Troglitazone','Zidovudine','Betamethasone','Alosetron','Budesonide','Bupropion','Dexlansoprazole','Dolasetron','Dronabinol','Eliglustat','Esomeprazole','Glyburide','Hydrocortisone','Lansoprazole','Linagliptin','Naldemedine','Naloxegol','Nateglinide','Nitisinone','Omeprazole','Ondansetron','Pantoprazole','Pioglitazone','Prednisolone','Prednisone','Rabeprazole','Repaglinide','Rolapitant','Saxagliptin','Sibutramine','Simvastatin','Tinidazole','Triamcinolone','Abiraterone','Dexfenfluramine','Famotidine','Fenfluramine','Lactulose','Levofloxacin','Loperamide','Metoclopramide','Metronidazole','Palonosetron','Papaverine','Phenolphthalein','Rosiglitazone','Ascorbic acid','Paclitaxel','Rosuvastatin','Isotretinoin','Doxycycline','Tetracycline','Vitamin A','Fentanyl','Atropine','Dicyclomine','Hyoscyamine','Mazindol','Morphine','Morphine (liposomal)','Nabilone','Phentermine','Propantheline','Scopolamine','Trospium','Acetylsalicylic acid','Glycerol phenylbutyrate','Magaldrate','Magnesium carbonate','Magnesium hydroxide','Nizatidine','Ranitidine','Ranitidine (bismuth citrate)','Lidocaine','Phenylephrine','Chlorpheniramine','Glimepiride','Glycopyrronium','Glycopyrronium (topical)','Potassium chloride','Dextromethorphan','Acetohexamide','Acebutolol','Chlorpropamide','Epinephrine','Glipizide','Tolazamide','Tolbutamide','Hydrocortisone (topical)','Miglitol','Acetaminophen','Caffeine','Dihydrocodeine','Naloxone','Codeine','Salbutamol','Amphetamine','Arformoterol','Atomoxetine','Benzphetamine','Bromocriptine','Dexmethylphenidate','Dextroamphetamine','Diethylpropion','Dihydroergotamine','Doxapram','Droxidopa','Ergometrine','Ergotamine','Formoterol','Guanethidine','Indacaterol','Iobenguane (I-123)','Isocarboxazid','Isoetharine','Isoprenaline','Isometheptene','Levothyroxine','Linezolid','Liothyronine','Lisdexamfetamine','Orciprenaline','Metamfetamine','Methylergometrine','Methylphenidate','Methysergide','Midodrine','Milnacipran','Phendimetrazine','Phenelzine','Phenylpropanolamine','Pirbuterol','Procarbazine','Ritodrine','Safinamide','Salmeterol','Selegiline','Terbutaline','Tranylcypromine','Venlafaxine','Tramadol','Acetazolamide','Amphotericin B','Amphotericin B (cholesteryl sulfate)','Amphotericin B (lipid complex)','Amphotericin B (liposomal)','Beclomethasone dipropionate','Atropine (ophthalmic)','Acetylcholine','Scopolamine (ophthalmic)','Acetylcysteine','Abarelix','Adenosine','Alendronic acid','Alfuzosin','Amitriptyline','Amoxapine','Anagrelide','Apomorphine','Astemizole','Azithromycin','Chloroquine','Chlorpromazine','Ciprofloxacin','Citalopram','Clozapine','Daunorubicin','Daunorubicin (liposomal)','Delavirdine','Diclofenac','Disopyramide','Dofetilide','Donepezil','Droperidol','Duloxetine','Efavirenz','Enoxacin','Entecavir','Epirubicin','Erlotinib','Erythromycin','Etodolac','Fenoprofen','Fluconazole','Fluoxetine','Fluphenazine','Flurbiprofen','Flutamide','Foscarnet','Galantamine','Gefitinib','Goserelin','Grepafloxacin','Haloperidol','Hydroxyzine','Ibutilide','Imipramine','Indomethacin','Ketorolac','Leuprolide','Mefenamic acid','Mefloquine','Methadone','Mifepristone','Mirtazapine','Moxifloxacin','Naproxen','Nelfinavir','Nicotine','Nilutamide','Nortriptyline','Olanzapine','Pemetrexed','Pentamidine','Perphenazine','Phenytoin','Piroxicam','Prochlorperazine','Promazine','Propofol','Dextropropoxyphene','Protriptyline','Quinidine','Quinine','Ranolazine','Risperidone','Sorafenib','Sotalol','Sulindac','Tacrine','Tacrolimus','Tamoxifen','Terfenadine','Theophylline','Thioridazine','Tizanidine','Tolmetin','Toremifene','Trazodone','Triamterene','Trifluoperazine','Triflupromazine','Trimipramine','Vardenafil','Voriconazole','Ziprasidone','Cisatracurium','Cyclosporine','Dicoumarol','Midazolam','Nabumetone','Pramipexole','Rocuronium','Succinylcholine','Warfarin','Amikacin','Amikacin (liposome)','Anisindione','Atazanavir','Bendroflumethiazide','Benzthiazide','Bumetanide','Cefditoren','Cefuroxime','Chlorothiazide','Chlorthalidone','Clopidogrel','Conivaptan','Digoxin','Etacrynic acid','Fluvoxamine','Furosemide','Hydrochlorothiazide','Hydroflumethiazide','Indapamide','Indinavir','Ketoconazole','Methotrexate','Metolazone','Modafinil','Mycophenolate mofetil','Netilmicin','Nevirapine','Rifampicin','Salicylic acid (sodium)','Streptomycin','Telithromycin','Tobramycin','Torasemide','Trichlormethiazide','Acitretin','Aclidinium','Mepenzolate','Prucalopride','Epinephrine (ophthalmic)','Epinephrine (topical)','Mannitol','Pseudoephedrine','Eluxadoline','Acrivastine','Potassium citrate','Butabarbital','Butalbital','Mesalazine','Ketorolac (ophthalmic)','Acyclovir','Nifedipine','Calcium glucoheptonate','Atenolol','Betaxolol','Betaxolol (ophthalmic)','Bisoprolol','Carteolol','Carteolol (ophthalmic)','Desmopressin','Enflurane','Entacapone','Esmolol','Guanadrel','Labetalol','Loxapine','Mecamylamine','Metoprolol','Propranolol','Reserpine','Thiethylperazine','Timolol','Timolol (ophthalmic)','Tolcapone','Treprostinil','Balsalazide','Ibuprofen','Sulfasalazine','Triamcinolone (ophthalmic)','Vancomycin','Flunisolide','Afatinib','Ethinylestradiol','Levonorgestrel','Amiloride','Amlodipine','Amprenavir','Benazepril','Bexarotene','Bosentan','Carbamazepine','Celecoxib','Cladribine','Clonidine','Diethylstilbestrol','Diltiazem','Doxazosin','Enalapril','Eplerenone','Estrone','Fosinopril','Imatinib','Isradipine','Lisinopril','Losartan','Mephenytoin','Minoxidil','Moexipril','Nicardipine','Nisoldipine','Olmesartan','Oxandrolone','Pentobarbital','Prazosin','Pyridostigmine','Ramipril','Rifabutin','Ritonavir','Rofecoxib','Secobarbital','Spironolactone','Testosterone','Testosterone (topical)','Ticlopidine','Trandolapril','Trovafloxacin','Valdecoxib','Valsartan','Verapamil','Vitamin E','Loratadine','Albendazole','Alclometasone (topical)','Ethanol','Cholecalciferol','Calcifediol','Calcitriol','Calcitriol (topical)','Ergocalciferol','Alfentanil','Fondaparinux','Fosamprenavir','Budesonide (nasal)','Dexamethasone (ophthalmic)','Fosaprepitant','Fosfomycin','Fosphenytoin','Alvimopan','Empagliflozin','Bisacodyl','Gemfibrozil','Gemifloxacin','Phenyltoloxamine','Nitazoxanide','Canagliflozin','Dapagliflozin','Aliskiren','Edrophonium','Levodopa','Nadolol','Neostigmine','Penbutolol','Zonisamide','Cetirizine','Allopurinol','Almotriptan','Alogliptin','Amcinonide','Aripiprazole','Betamethasone (topical)','Bortezomib','Captopril','Cariprazine','Cinoxacin','Tetracosactide','Danazol','Darunavir','Desonide (topical)','Desoximetasone (topical)','Dexamethasone (topical)','Diazoxide','Diclofenamide','Dienestrol (topical)','Dobutamine','Dopamine','Drospirenone','Ephedrine','Estradiol','Estradiol (topical)','Estramustine','Estrone sulfate','Estrone sulfate (topical)','Etonogestrel','Everolimus','Fludrocortisone','Fluocinonide (topical)','Flurandrenolide (topical)','Gatifloxacin','Ulobetasol (topical)','Iloperidone','Isoniazid','Lomefloxacin','Lorcaserin','Lumateperone','Medroxyprogesterone acetate','Megestrol acetate','Mephentermine','Mesoridazine','Metaraminol','Methdilazine','Methotrimeprazine','Methoxamine','Methylprednisolone','Methylprednisolone (topical)','Nalidixic acid','Niacin','Nicotinamide','Norepinephrine','Norethisterone','Norfloxacin','Octreotide','Ofloxacin','Omacetaxine mepesuccinate','Orlistat','Paliperidone','Perindopril','Polythiazide','Prednicarbate (topical)','Progesterone','Progesterone (topical)','Promethazine','Propiomazine','Quetiapine','Quinestrol','Saquinavir','Sirolimus','Sparfloxacin','Tipranavir','Triamcinolone (topical)','Alimemazine','Vorinostat','Lipoic acid','Diatrizoate','Topiramate','Aminoglutethimide','Clofarabine','Leflunomide','Oxcarbazepine','Pregabalin','Primidone','Tioguanine','Trimethoprim','Methoxsalen','Mexiletine','Thiabendazole','Zileuton','Ertugliflozin','Fidaxomicin','Pramlintide','Rifaximin','Sitagliptin','Alprazolam','Alprostadil','Sapropterin','Sumatriptan','Altretamine','Pyridoxine','Dezocine','Dronedarone','Hydrocodone','Hydromorphone','Levacetylmethadol','Levorphanol','Meperidine','Nalbuphine','Oxycodone','Oxymorphone','Pentazocine','Amantadine','Diclofenac (topical)','Lidocaine (topical)','Chlorambucil','Cidofovir','Cyclophosphamide','Pamidronic acid','Zoledronic acid','Ambrisentan','Doxycycline (topical)','Aminolevulinic acid (topical)','Tetracycline (topical)','Aminosalicylic acid','Amiodarone','Amisulpride','Atorvastatin','Amobarbital','Dihydrotachysterol','Amoxicillin','Demeclocycline','Minocycline','Mycophenolic acid','Oxytetracycline','Probenecid','Glutamic acid','Ampicillin','Benzatropine','Carbamoylcholine (ophthalmic)','Clemastine','Dexbrompheniramine','Doxylamine','Ipratropium','Ipratropium (nasal)','Phenylephrine (ophthalmic)','Procyclidine','Trihexyphenidyl','Ephedrine (nasal)','Misoprostol','Azatadine','Biperiden','Brimonidine (ophthalmic)','Brimonidine (topical)','Brompheniramine','Carbinoxamine','Cyproheptadine','Darifenacin','Meclizine','Olopatadine (nasal)','Perflutren','Tripelennamine','Triprolidine','Prilocaine (topiclal)','Fenofibrate','Homatropine','Glycerin','Apalutamide','Magnesium citrate','Apixaban','Bethanechol','Carvedilol','Chlordiazepoxide','Clobazam','Clonazepam','Clorazepic acid','Cocaine (nasal)','Cyclobenzaprine','Cycloserine','Deserpidine','Desipramine','Diazepam','Diphenhydramine','Valproic acid','Doxepin','Doxepin (topical)','Eprosartan','Ertapenem','Eszopiclone','Ethchlorvynol','Felodipine','Fenoldopam','Flurazepam','Halazepam','Irbesartan','Isosorbide dinitrate','Isosorbide mononitrate','Lindane','Lorazepam','Maprotiline','Methylphenobarbital','Meprobamate','Meropenem','Nefazodone','Nimodipine','Nitroglycerin','Oxamniquine','Oxazepam','Paroxetine','Phenoxybenzamine','Phentolamine','Physostigmine','Pimozide','Pindolol','Piperazine','Quinapril','Remifentanil','Rimantadine','Rivastigmine','Sertraline','Sufentanil','Tamsulosin','Telmisartan','Temazepam','Tolterodine','Triazolam','Trimethaphan','Zaleplon','Zolpidem','Apraclonidine','Bupivacaine','Buspirone','Cerivastatin','Chloramphenicol','Dapsone','Eletriptan','Ethosuximide','Griseofulvin','Lovastatin','Mitotane','Nafcillin','Pimecrolimus (topical)','Ropivacaine','Sildenafil','Teniposide','Vinblastine','Vinorelbine','Zafirlukast','Desogestrel','Armodafinil','Arsenic trioxide','Lumefantrine','Baclofen','Ropinirole','Tryptophan','Asenapine','Obeticholic acid','Dipyridamole','Didanosine','Diflunisal','Dorzolamide (ophthalmic)','Flurbiprofen (ophthalmic)','Ibandronate','Icosapent','Meclofenamic acid','Risedronic acid','Argatroban','Diclofenac (ophthalmic)','Meloxicam','Pentoxifylline','Phenylbutazone','Suprofen (ophthalmic)','Tirofiban','Azelastine (nasal)','Prednisolone (ophthalmic)','Triamcinolone (nasal)','Dexamethasone (nasal)','Atovaquone','Proguanil','Guanidine','Avanafil','Axitinib','Azathioprine','Azilsartan medoxomil','Benzocaine (topical)','Bacitracin','Calcium citrate','Calcium glubionate anhydrous','Calcium gluconate','Calcium lactate','Calcium Phosphate','Magnesium chloride','Magnesium gluconate','Baloxavir marboxil','Zinc gluconate','Zinc sulfate','Bromfenac','Carbenicillin','Cefaclor','Cefdinir','Cephalexin','Clavulanic acid','Dicloxacillin','Ketoprofen','Nitrofurantoin','Oxaprozin','Phenoxymethylpenicillin','Sulfadiazine','Sulfamethizole','Sulfisoxazole','Valaciclovir','Baricitinib','Ambenonium','Aminophylline','Dapsone (topical)','Doxacurium','Doxorubicin','Doxorubicin (liposomal)','Ethotoin','Exemestane','Fluoxymesterone','Guanfacine','Irinotecan','Irinotecan (liposomal)','Levobupivacaine','Methyldopa','Mivacurium','Montelukast','Paclitaxel (protein-bound)','Phenobarbital','Praziquantel','Ramelteon','Rifapentine','Tadalafil','Terazosin','Thalidomide','Tubocurarine','Vigabatrin','Beclomethasone dipropionate (nasal)','Oxitriptan','Cabergoline','Clomipramine','Escitalopram','Flecainide','Frovatriptan','Molindone','Naratriptan','Nebivolol','Pergolide','Propafenone','Rizatriptan','Tetrabenazine','Thiothixene','Yohimbine','Zolmitriptan','Ezetimibe','Methscopolamine','Hydrocortisone (ophthalmic)','Bicalutamide','Bictegravir','Emtricitabine','Bedaquiline','Bepridil','Bosutinib','Cabozantinib','Cilostazol','Crizotinib','Dasatinib','Degarelix','Enzalutamide','Eribulin','Ezogabine','Halofantrine','Hydroxychloroquine','Lapatinib','Linaclotide','Lofexidine','Midostaurin','Nilotinib','Panobinostat','Pazopanib','Pimavanserin','Posaconazole','Primaquine','Probucol','Procainamide','Rilpivirine','Romidepsin','Sevoflurane','Sodium bicarbonate','Solifenacin','Sunitinib','Telavancin','Triptorelin','Urea','Vandetanib','Vemurafenib','Disulfiram','Ethambutol','Ethionamide','Etoposide','Fluorouracil','Mebendazole','Oxacillin','Piperacillin','Pravastatin','Stavudine','Tretinoin','Bivalirudin','Calcipotriol (topical)','Deferiprone','Digitoxin','Eltrombopag','Etidronic acid','Levamlodipine','Penicillamine','Strontium chloride Sr-89','Folic acid','Tiludronic acid','Triethylenetetramine','Brexpiprazole','Bromfenac (ophthalmic)','Demecarium (ophthalmic)','Dimenhydrinate','Isoflurophate (ophthalmic)','Physostigmine (ophthalmic)','Busulfan','Calcium chloride','Clevidipine','Cyclandelate','Epoprostenol','Halcinonide (topical)','Hydralazine','Iloprost','Lurasidone','Metyrosine','Silodosin','Temsirolimus','Tolazoline','Chenodeoxycholic acid','Oxymetholone','Stanozolol','Capecitabine','Carisoprodol','Carmustine','Kanamycin','Cefixime','Cefotaxime','Cefpodoxime','Cefprozil','Ceftazidime','Ceftriaxone','Cenobamate','Ceritinib','Clofibrate','Trabectedin','Chlorzoxazone','Cholic Acid','Activated charcoal','Creatine','Methohexital','Cinacalcet','Chlorcyclizine','Cyclizine','Flavoxate','Memantine','Orphenadrine','Oxybutynin','Phenindamine','Mepyramine','Salsalate','Cloxacillin','Dutasteride','Fexofenadine','Flunisolide (nasal)','Fluorometholone (ophthalmic)','Halothane','Idarubicin','Mezlocillin','Mitoxantrone','Paricalcitol','Benzylpenicillin','Benzylpenicillin (potassium)','Benzylpenicillin (sodium)','Sulfamethoxazole','Citric acid','Picosulfuric acid','Aztreonam','Bacampicillin','Cefadroxil','Cefamandole','Cefazolin','Cefepime','Cefmetazole','Cefonicid','Cefoperazone','Cefotetan','Cefoxitin','Ceftaroline fosamil','Ceftibuten','Ceftizoxime','Cefalotin','Cefapirin','Cefradine','Dalfampridine','Desvenlafaxine','Doripenem','Diamorphine','Lenvatinib','Levomilnacipran','Lincomycin','Loracarbef','Methenamine','Meticillin','Nelarabine','Novobiocin','Oritavancin','Oxtriphylline','Paromomycin','Pemoline','Pyrazinamide','Quinupristin','Spectinomycin','Sulfadoxine','Tapentadol','Ticarcillin','Tigecycline','Trimetrexate','Vilazodone','Vortioxetine','Clobetasol (topical)','Cobicistat','Cobimetinib','Cocaine (topical)','Olsalazine','Dabrafenib','Daclatasvir','Dactinomycin','Dantrolene','Ospemifene','Deferasirox','Felbamate','Flibanserin','Sulfinpyrazone','Telaprevir','Deflazacort','Phenylbutyric acid','Delafloxacin','Dexmedetomidine','Dinoprostone (topical)','Difenoxin','Rasagiline','Diphenoxylate','Dipivefrin (ophthalmic)','Docetaxel','Moricizine','Doxercalciferol','Methocarbamol','Trimethadione','Aminolevulinic acid','Methyl aminolevulinate (topical)','Dyphylline','Echothiophate (ophthalmic)','Edoxaban','Levetiracetam','Ivacaftor','Boceprevir','Etravirine','Isavuconazonium','Lenalidomide','Lomitapide','Lonafarnib','Maraviroc','Mirabegron','Pirfenidone','Rivaroxaban','Rufinamide','Suvorexant','Terbinafine','Ticagrelor','Topotecan','Fesoterodine','Idelalisib','Olaparib','Pitavastatin','Simeprevir','Stiripentol','Tiotropium','Umeclidinium','Elvitegravir','Pretomanid','Riociguat','Teriflunomide','Encorafenib','Ledipasvir','Levocarnitine','Lidocaine (ophthalmic)','Lopinavir','Lubiprostone','Lumacaftor','Metronidazole (topical)','Miconazole (topical)','Raltegravir','Tofacitinib','Nalmefene','Propylthiouracil','Netupitant','Mestranol','Melatonin','Riluzole','Roflumilast','Omadacycline','Proparacaine (ophthalmic)','Metocurine','Pancuronium','Pipecuronium','Vecuronium','Phylloquinone','Pilocarpine','Pilocarpine (ophthalmic)','Prilocaine','Dalfopristin','Sevelamer','Minoxidil (topical)','Pyrimethamine','Nitrous acid','Sodium sulfate','Osimertinib','Velpatasvir','Olodaterol','Vilanterol','Ursodeoxycholic acid','Vismodegib','Sarecycline','Zinc acetate','Lactitol','Flucytosine','Ketamine','Pitolisant','Ponatinib','Tucatinib','Ulipristal','Venetoclax','Regorafenib','Gemcitabine','Metaxalone','Lamotrigine','Levobunolol (ophthalmic)','Cytarabine','Dacarbazine','Floxuridine','Fludarabine','Hydroxyurea','Mechlorethamine','Melphalan','Mercaptopurine','Mitomycin','Pentostatin','Temozolomide','Uracil mustard','Sodium chloride','Arbutamine','Metipranolol (ophthalmic)','Oxybuprocaine (ophthalmic)','Chlormezanone','Cinchocaine (topical)','Estazolam','Gabapentin','Ifosfamide','Paramethadione','Phenacemide','Phensuximide','Tiagabine','Entrectinib','Fostemsavir','Gilteritinib','Glasdegib','Osilodrostat','Relugolix','Ribociclib','Siponimod','Triclabendazole','Valbenazine','Nintedanib','Iodixanol','Methoxyflurane','Iohexol','Zalcitabine','Oxymetazoline (ophthalmic)','Oxymetazoline (nasal)','Oxymetazoline (topical)','Trimethobenzamide','Quazepam','Artesunate','Selexipag','Leucovorin','Procaine','Thiopental','Methionine','Erdafitinib','Norgestimate','Methimazole','Lutein','Phenylephrine (nasal)','Phenylephrine (topical)','Vorapaxar','Acalabrutinib','Cangrelor','Prasugrel','Sodium citrate','Tranexamic acid','Anastrozole','Apremilast','Fostamatinib','Binimetinib','Cabazitaxel','Cannabidiol','Ciclesonide','Elagolix','Alpelisib','Amifostine','Aminocaproic acid','Deoxycholic acid','Artemether','Betrixaban','Carfilzomib','Avatrombopag','Brigatinib','Capmatinib','Ibrutinib','Istradefylline','Lasmiditan','Letermovir','Lorlatinib','Nepafenac (ophthalmic)','Neratinib','Niraparib','Ruxolitinib','Selumetinib','Sodium acetate','Tromethamine','Letrozole','Darolutamide','Elbasvir','Lusutrombopag','Sofosbuvir','Lesinurad','Phenyl salicylate','Oseltamivir','Raloxifene','Ivabradine','Ixabepilone','Ixazomib','Dextrothyroxine','Lemborexant','Palbociclib','Rucaparib','Sonidegib','Tafamidis','Macitentan','Pomalidomide','Retapamulin (topical)','Isosorbide','Talazoparib','Tasimelteon','Thiotepa','Trametinib','Zinc chloride','Finasteride','Belinostat','Chloramphenicol (ophthalmic)','Abametapir (topical)','Adapalene (topical)','Azelaic acid (topical)','Salicylic acid (topical)','Tazarotene (topical)','Tretinoin (topical)','Dichloralphenazone','Etomidate','Levamisole','Alitretinoin (topical)','Bexarotene (topical)','Bupivacaine (liposome)','Chloroprocaine','Etidocaine','Tetracaine (ophthalmic)','Mepivacaine','Nitric Oxide','Phenazopyridine','Silver sulfadiazine (topical)','Tafenoquine','Imiquimod (topical)','Methoxsalen (topical)','Articaine','Duvelisib','Fedratinib','Troleandomycin','Fluticasone (nasal)','Benzoyl peroxide (topical)','Brivaracetam','Testolactone','Chloral hydrate','Levocetirizine','Methsuximide','Desloratadine','Medrysone (ophthalmic)','Isoflurane','Diphenhydramine (topical)','Clofedanol','Histamine','Rotigotine','Tetracaine','Tetracaine (topical)','Sulfacetamide (ophthalmic)','Resorcinol (topical)','Trifluridine','Fluticasone','Levosalbutamol','Iodine','Pexidartinib','Esketamine','Chloramphenicol (otic)','Ganciclovir','Amifampridine','Bendamustine','Rimexolone (ophthalmic)','Dimethyl fumarate','Fingolimod','Methyltestosterone','Perampanel','Ganirelix','Abemaciclib','Radium Ra 223 dichloride','Sodium phosphate, monobasic (p32)','Valganciclovir','Alectinib','Lacosamide','Levobetaxolol (ophthalmic)','Azacitidine','Milrinone','Iopamidol','Revefenacin','Ivosidenib','Larotrectinib','Ozanimod','Upadacitinib','Ribavirin','Decitabine','Iobenguane (I-131)','Lomustine','Pralatrexate','Cytarabine (liposomal)','Dacomitinib','Telotristat ethyl','Deferoxamine','Telbivudine','Levonordefrin','Dexrazoxane','Ciclesonide (nasal)','Doravirine','Rimegepant','Tazemetostat','Copanlisib','Selinexor','Diroximel fumarate','Grazoprevir','Enasidenib','Methylene blue','Micafungin','Miltefosine','Paritaprevir','Sacubitril','Tipiracil','Varenicline','Lithium carbonate','Lurbinectedin','Macimorelin','Diiodohydroxyquinoline','Monomethyl fumarate','Naphazoline (ophthalmic)','Eslicarbazepine','Acetohydroxamic acid','Fulvestrant','Tocainide','Valrubicin','Amrinone','Levmetamfetamine (nasal)','Naphazoline (nasal)','Propylhexedrine (nasal)','Tetryzoline (nasal)','Tetryzoline (ophthalmic)','Xylometazoline (nasal)','Famciclovir','Iodipamide','Febuxostat','Bretylium','Voxelotor','Zanubrutinib','Dienogest','Hydroxyamphetamine (ophthalmic)','Glecaprevir','Fosnetupitant','Benznidazole','Sodium oxybate','Potassium Iodide','Pentoxyverine','Paraldehyde','Phenylephrine (otic)','Methacholine','Pralidoxime','Ioflupane I-123','Flumazenil','Iothalamic acid','Iopanoic acid','Cyclopentolate (ophthalmic)','Iopromide','Ioversol','Ioxilan','Metyrapone','Tropicamide (ophthalmic)','Levoleucovorin','Imipenem','Sorbitol','Solriamfetol','Oliceridine','Rapacuronium','Choline salicylate','Plazomicin','Remdesivir','Lactic acid','Potassium bicarbonate','Potassium gluconate','Desflurane','Opicapone','Tegaserod','Bempedoic acid','Fluticasone (topical)','Risdiplam','Ripretinib','Niclosamide','Minocycline (topical)','Brexanolone','Cefiderocol','Remimazolam','Avapritinib','Pemigatinib','Ubrogepant','Fospropofol','Nitrous oxide','Brinzolamide (ophthalmic)','Azelastine (ophthalmic)','Benzhydrocodone','Bremelanotide','Calcium glycerophosphate','Ceftolozane','Fenofibric acid','Eravacycline','Rifamycin','Secnidazole','Tedizolid','Docusate','Elexacaftor','Sodium phosphate, monobasic','Plecanatide','Vibegron','Triheptanoin','Oxyquinoline (topical)','Levomefolic acid','Levomefolic acid (calcium)','Aminobenzoic acid','Ammonium chloride','Monopotassium phosphate','Cabotegravir','Beta carotene','Potassium acetate','Icatibant','Regadenoson','Methyl salicylate (topical)','Econazole (topical)','Coenzyme M','Glucosamine','Bromotheophylline','Trifarotene (topical)','Fomepizole','Nifurtimox','Silver nitrate (ophthalmic)','Silver nitrate (topical)','Trioxsalen','Potassium perchlorate','Clioquinol (topical)','Hexachlorophene (topical)','Etelcalcetide','Anidulafungin','Bazedoxifene','Clomifene','Edetate calcium disodium anhydrous','Edetate disodium anhydrous','Dehydrocholic acid','Dasabuvir','Hexaminolevulinate','Tivozanib','Homatropine (ophthalmic)','Benzonatate','Tyropanoic acid','Oxygen'];
var medlist = document.getElementById('medlist')

knownmedicine.forEach(function(item){
    var option = document.createElement('option');
    option.value = item;
    medlist.appendChild(option);
});

const addbtn = document.getElementById('add')
const allmed = document.getElementById('allmed')


addbtn.addEventListener('click', createnewmed)
function createnewmed(){
    var newmed = document.createElement('input')
    newmed.type = 'text'
    newmed.setAttribute('list','medlist')
    newmed.setAttribute('name','ip')
    allmed.insertBefore(newmed,addbtn)
    var br = document.createElement('br')
    allmed.insertBefore(br, addbtn)
}