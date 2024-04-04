from fonctions.connexion import matchs, poules, tournois
from bson import ObjectId
import itertools

def creer_match(arbitre, participant1_id, participant2_id):
    match_id = matchs.insert_one({
        "arbitre": arbitre,
        "participants": [
            ObjectId(participant1_id),
            ObjectId(participant2_id)
        ],
        "gagnant": "" ,
        "score1": None ,
        "score2": None
    }).inserted_id
    return match_id
   

import itertools

import itertools

def creer_matchs_poule(id_poule):
    poule = poules.find_one({"_id": ObjectId(id_poule)})
    equipes_poule = poule.get("equipes", []) 
    combinaisons_equipes = list(itertools.combinations(equipes_poule, 4))

    for combinaison in combinaisons_equipes:
        for i in range(len(combinaison)):
            for j in range(i + 1, len(combinaison)):
                equipe1_id = combinaison[i]
                equipe2_id = combinaison[j]

                match_id = creer_match(arbitre="", participant1_id=equipe1_id, participant2_id=equipe2_id)

                poules.update_one({"_id": ObjectId(id_poule)}, {"$addToSet": {"matches": match_id}})


def trouver_match_par_id(_id):
    match = matchs.find_one({"_id": ObjectId(_id)})
    return match

def modifier_match(match_id, data):
    matchs.update_one({"_id": ObjectId(match_id)}, {"$set": data})

def supprimer_match(match_id):
    matchs.delete_one({"_id": ObjectId(match_id)})


def dell():
    matchs.delete_many({})