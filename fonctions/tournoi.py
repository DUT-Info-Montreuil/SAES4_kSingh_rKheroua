import connexion

tournois = connexion.tournois




def inserer_tournoi( nom, date, nb_tables, duree, format, lieu, description, pwd, salle):
    tournois.insert_one(  {
        "nom": nom,
        "date": date,
        "nbTables": nb_tables,
        "durée": duree,
        "format": format,
        "lieu": lieu,
        "description": description,
        "pwd": pwd,
        "Joueurs": [],
        "matches": [],
        "poules": [],
        "Salle": salle
    }
    )


def recherche_tournoi(_id):
    result = tournois.find_one({"_id": _id})
    print(result)     


def modifier_tournoi(_id, data):
    tournois.update_one({"_id": _id}, {"$set": data})


def supprimer_tournoi(_id, pwd):
    tournoi = tournois.find_one({"_id": _id})
    if tournoi:
        if tournoi["pwd"] == pwd:
            tournois.delete_one({"_id": _id})
            print("Vous avez bien supprimé le tournoi", tournoi["nom"])
        else:
            print("Mot de passe incorrect pour supprimer le tournoi")
    else:
        print("Aucun tournoi trouvé avec l'ID", _id)


