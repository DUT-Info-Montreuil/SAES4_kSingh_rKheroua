import pymongo



client = pymongo.MongoClient("mongodb://localhost:27017/")

database = client["tournoi"]

tournois = database["tournois"]
matchs = database["matchs"]
equipes = database["equipes"]
joueurs = database["joueurs"]
poules = database["poules"]
classement = database["classement"]

