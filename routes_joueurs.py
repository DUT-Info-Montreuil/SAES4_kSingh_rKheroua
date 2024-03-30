from flask import Blueprint, request, jsonify
from fonctions.joueurs import inserer_joueur, rechercher_joueur, modifier_joueur, supprimer_joueur

joueur_bp = Blueprint('joueur_bp', __name__)

@joueur_bp.route('/joueurs', methods=['POST'])
def creer_un_joueur():
    data = request.get_json()
    inserer_joueur(**data)
    return jsonify({"message": "Joueur créé avec succès"})

@joueur_bp.route('/joueurs/<string:_id>', methods=['GET'])
def trouver_un_joueur(_id):
    joueur = rechercher_joueur(_id)
    if joueur:
        return jsonify(joueur)
    else:
        return jsonify({"message": "Joueur non trouvé"})

@joueur_bp.route('/joueurs/<string:_id>', methods=['PUT'])
def modifier_un_joueur(_id):
    data = request.get_json()
    modifier_joueur(_id, data)
    return jsonify({"message": "Joueur modifié avec succès"})

@joueur_bp.route('/joueurs/<string:_id>', methods=['DELETE'])
def supprimer_un_joueur(_id):
    supprimer_joueur(_id)
    return jsonify({"message": "Joueur supprimé avec succès"})