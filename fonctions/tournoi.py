from fonctions.connexion import tournois
from bson import ObjectId



def inserer_tournoi( nom, date, nb_tables, duree, format, lieu, description, pwd, salle):
    tournois.insert_one(  {
        "nom": nom,
        "date": date,
        "nbTables": nb_tables,
        "duree": duree,
        "format": format,
        "lieu": lieu,
        "description": description,
        "pwd": pwd,
        "Joueurs": [],
        "matches": [],
        "poules": [],
        "Salle": salle,
        "status": "ouvert"
    }
    )


def recherche_tournoi(_id):
    tournoi = tournois.find_one({"_id": ObjectId(_id)})
    return tournoi
    

def modifier_tournoi(_id, data):
    tournois.update_one({"_id": ObjectId(_id)}, {"$set": data})


def supprimer_tournoi(_id, pwd):
    tournoi = tournois.find_one({"_id": ObjectId(_id)})
    if tournoi:
        if tournoi["pwd"] == pwd:
            tournois.delete_one({"_id": ObjectId(_id)})
            print("Vous avez bien supprimé le tournoi", tournoi["nom"])
        else:
            print("Mot de passe incorrect pour supprimer le tournoi")
    else:
        print("Aucun tournoi trouvé avec l'ID", _id)


def recherche_nom_tournoi(nom):
    tournoi = tournois.find_one({"nom": nom})
    if tournoi:
        return str(tournoi["_id"])
    else:
        print("Aucun tournoi avec ce nom")


def rejoindre_tournoi(idTournoi, idJoueur):
    tournois.update_one({"_id": ObjectId(idTournoi)}, {"$addToSet": {"Joueurs":idJoueur}})


def rechercher_tout_les_tournoi():
    tournoi = tournois.find()
    resultat = []
    for t in tournoi:
        resultat.append({
            "nom": t["nom"],
            "date": t["date"],
            "lieu": t["lieu"],
            "description": t["description"]
        })

    return resultat