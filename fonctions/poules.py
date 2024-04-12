from fonctions.connexion import poules
from bson import ObjectId
from fonctions.connexion import tournois
from fonctions.matchs import creer_matchs_poule
from fonctions.tournoi import modifier_tournoi, recherche_tournoi

import math

def creer_poules(_id):
    tournoi = tournois.find_one({"_id": ObjectId(_id)})
    modifier_tournoi(_id,{"status":"fermé"})
    joueurs_list = tournoi.get("Joueurs", [])  # Récupérer les joueurs du tournoi
    nb_joueurs = len(joueurs_list)
    nb_poules = math.ceil(nb_joueurs / 4)  # Calculer le nombre de poules nécessaires
    poules_created = []

    for i in range(nb_poules):
        # Sélectionner les joueurs pour cette poule
        start_index = i * 4
        end_index = min(start_index + 4, nb_joueurs)
        joueurs_poule = [str(joueur) for joueur in joueurs_list[start_index:end_index]]

        # Insérer la nouvelle poule avec les joueurs sélectionnés
        poule_id = poules.insert_one({
            "tournoi": ObjectId(_id),
            "equipes": joueurs_poule,
            "classement": [],
            "matches": []
        }).inserted_id
        poules_created.append(poule_id)
        modifier_tournoi(_id,{"poules":poules_created})
        creer_matchs_poule(poule_id,_id)
        

    

def rechercher_poule(_id):
    poule = poules.find_one({"_id": ObjectId(_id)})
    return poule

def modifier_poule(_id, data):
    poules.update_one({"_id": ObjectId(_id)}, {"$set": data})

def supprimer_poule(_id):
    poules.delete_one({"_id": ObjectId(_id)})


def rechercher_poule_de_tournoi(_id_tournoi):
    poules_tournoi = poules.find({"tournoi": ObjectId(_id_tournoi)})
    resultat = []
    for poule in poules_tournoi:
        matches_poule = [str(match) for match in poule.get("matches", [])]
        resultat.append({
            "matches": matches_poule
        })
    return resultat


def dell():
    poules.delete_many({})