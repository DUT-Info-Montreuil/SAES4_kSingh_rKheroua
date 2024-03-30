import connexion

joueurs = connexion.joueurs



def recherche_joueur(_id):
    result = joueurs.find_one({"_id": _id})
    print(result)
    return result

    
def inserer_joueur(nom, prenom, age, niveau, email, tournois):
    joueurs.insert_one({
        "nom": nom,
        "prenom": prenom,
        "âge": age,
        "niveau": niveau,
        "email": email,
        "Tournois": tournois
    }
    )


def rechercher_joueur(_id):
    joueur = joueurs.find_one({"_id": _id})
    return joueur


def modifier_joueur(_id, data):
    joueurs.update_one({"_id": _id}, {"$set": data})


def supprimer_joueur(_id):
    joueurs.delete_one({"_id": _id})
    

