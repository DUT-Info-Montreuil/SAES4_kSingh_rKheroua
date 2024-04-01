from fonctions.connexion import joueurs
from bson import ObjectId




def recherche_joueur(_id):
    result = joueurs.find_one({"_id": ObjectId(_id)})
    return result

    
def inserer_joueur(nom, prenom, age, niveau, email, tournois):
    joueurs.insert_one({
        "nom": nom,
        "prenom": prenom,
        "âge": age,
        "niveau": niveau,
        "email": email,
        "Tournois": ObjectId(tournois)
    }
    )


def rechercher_joueur(_id):
    joueur = joueurs.find_one({"_id": ObjectId(_id)})
    return joueur


def modifier_joueur(_id, data):
    joueurs.update_one({"_id": ObjectId(_id)}, {"$set": data})


def supprimer_joueur(_id):
    joueurs.delete_one({"_id": ObjectId(_id)})
    

