from fonctions.connexion import equipes
from bson import ObjectId
from fonctions.joueurs import inserer_joueur_pour_equipe
from fonctions.tournoi import rejoindre_tournoi

def inserer_equipe(nomEquipes,tournois, nom1, prenom1, age1, niveau1, email1, nom2, prenom2, age2, niveau2, email2):
    joueur1 = inserer_joueur_pour_equipe(nom1, prenom1, age1, niveau1, email1, tournois)
    joueur2 = inserer_joueur_pour_equipe(nom2, prenom2, age2, niveau2, email2, tournois)
    e = equipes.insert_one ({
        "nom": nomEquipes,
        "membres": [joueur1, joueur2]    
    })
    rejoindre_tournoi(tournois,e.inserted_id)


def rechercher_equipe(_id):
    equipe = equipes.find_one({"_id": ObjectId(_id)})
    return equipe


def modifier_equipe(_id, data):
    equipes.update_one({"_id": ObjectId(_id)}, {"$set": data})


def supprimer_equipe(_id):
    equipes.delete_one({"_id": ObjectId(_id)})