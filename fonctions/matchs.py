from fonctions.connexion import matchs, poules, tournois
from bson import ObjectId
import itertools
from fonctions.joueurs import rechercher_nom_joueur

def creer_match(arbitre, participant1, participant2,_id_tournoi):
    match_id = matchs.insert_one({
        "arbitre": arbitre,
        "participants": [
            participant1,
            participant2
        ],
        "gagnant": "",
        "score1": None,
        "score2": None,
        "tournoi": ObjectId(_id_tournoi)
    }).inserted_id
    return match_id


def creer_matchs_poule(id_poule,_id_tournois):
    poule = poules.find_one({"_id": ObjectId(id_poule)})
    equipes_poule = poule.get("equipes", [])
    combinaisons_equipes = list(itertools.combinations(equipes_poule, 4))

    for combinaison in combinaisons_equipes:
        for i in range(len(combinaison)):
            for j in range(i + 1, len(combinaison)):

                equipe1_id = combinaison[i]
                equipe2_id = combinaison[j]
                j1 = rechercher_nom_joueur(equipe1_id)
                j2 = rechercher_nom_joueur(equipe2_id)
                match_id = creer_match(arbitre="", participant1=j1, participant2=j2,_id_tournoi=_id_tournois)
                
                

                poules.update_one({"_id": ObjectId(id_poule)}, {"$addToSet": {"matches": [j1,j2]}})


def trouver_match_par_id(_id):
    match = matchs.find_one({"_id": ObjectId(_id)})
    return match

def affiche_participant(_id):
    match = matchs.find_one({"_id": ObjectId(_id)})
    participant = match["participants"]

    return match

def modifier_match(match_id, data):
    matchs.update_one({"_id": ObjectId(match_id)}, {"$set": data})


def supprimer_match(match_id):
    matchs.delete_one({"_id": ObjectId(match_id)})


def dell():
    matchs.delete_one({})