from flask import Blueprint, request, jsonify
from fonctions.matchs import creer_match, trouver_match_par_id, modifier_match, supprimer_match, dell
from bson import json_util

match_bp = Blueprint('match_bp', __name__)




@match_bp.route('/cree', methods=['POST'])
def creer_un_match():
    data = request.json  
    arbitre = data.get("arbitre")  
    participant1_id = data.get("participant1_id")
    participant2_id = data.get("participant2_id")
    match_id = creer_match(arbitre, participant1_id, participant2_id)               
    return jsonify({"message": "Match créé avec succès"})


@match_bp.route('/rechercher/<string:match_id>', methods=['GET'])
def rechercher_un_match(match_id):
    match = trouver_match_par_id(match_id)
    matchjson = json_util.dumps(match)
    if matchjson:
        return jsonify(matchjson)
    else:
        return jsonify({"message": "Match non trouvé"})


@match_bp.route('/modifier/<string:match_id>', methods=['PUT'])
def modifier_un_match(match_id):
    data = request.json
    modifier_match(match_id, data)
    return jsonify({"message": "Match mis à jour avec succès"})


@match_bp.route('/supprimer/<string:match_id>', methods=['DELETE'])
def supprimer_un_match(match_id):
    supprimer_match(match_id)
    return jsonify({"message": "Match supprimé avec succès"})


@match_bp.route('/del', methods=['GET'])
def dell():
    dell()
    return jsonify({"message": "supprimé avec succès"})
