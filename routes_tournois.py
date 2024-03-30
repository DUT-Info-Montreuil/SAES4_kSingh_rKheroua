from flask import Blueprint, jsonify, request
from fonctions.tournoi import inserer_tournoi,recherche_tournoi,modifier_tournoi,supprimer_tournoi

tournoi_bp = Blueprint('tournoi_bp', __name__)

@tournoi_bp.route('/tournois', methods=['POST'])
def creer_un_tournoi():
    data = request.get_json()
    inserer_tournoi(**data)
    return jsonify({"message": "Tournoi créé avec succès"})

@tournoi_bp.route('/tournois/<string:_id>', methods=['GET'])
def trouver_un_tournoi(_id):
    tournoi = recherche_tournoi(_id)
    if tournoi:
        return jsonify(tournoi)
    else:
        return jsonify({"message": "Tournoi non trouvé"})

@tournoi_bp.route('/tournois/<string:_id>', methods=['PUT'])
def modifier_un_tournoi(_id):
    data = request.get_json()
    modifier_tournoi(_id, data)
    return jsonify({"message": "Tournoi modifié avec succès"})

@tournoi_bp.route('/tournois/<string:_id>/<string:pwd>', methods=['DELETE'])
def supprimer_un_tournoi(_id, pwd):
    supprimer_tournoi(_id, pwd)
    return jsonify({"message": "Tournoi supprimé avec succès"})
