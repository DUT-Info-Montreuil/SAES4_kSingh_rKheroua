from fonctions.connexion import matchs
from bson import ObjectId

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
    })
   

def trouver_match_par_id(_id):
    match = matchs.find_one({"_id": ObjectId(_id)})
    return match

def modifier_match(match_id, data):
    matchs.update_one({"_id": ObjectId(match_id)}, {"$set": data})

def supprimer_match(match_id):
    matchs.delete_one({"_id": ObjectId(match_id)})