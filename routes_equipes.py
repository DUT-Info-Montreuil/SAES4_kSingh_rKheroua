from flask import Blueprint, request, jsonify
from fonctions.equipes import inserer_equipe, rechercher_equipe, modifier_equipe, supprimer_equipe

equipe_bp = Blueprint('equipe_bp', __name__)

@equipe_bp.route('/equipes', methods=['POST'])
def creer_une_equipe():
    data = request.get_json()
    inserer_equipe(**data)
    return jsonify({"message": "Équipe créée avec succès"})

@equipe_bp.route('/equipes/<string:_id>', methods=['GET'])
def obtenir_une_equipe(_id):
    equipe = rechercher_equipe(_id)
    if equipe:
        return jsonify(equipe)
    else:
        return jsonify({"message": "Équipe non trouvée"})

@equipe_bp.route('/equipes/<string:_id>', methods=['PUT'])
def modifier_une_equipe(_id):
    data = request.get_json()
    modifier_equipe(_id, data)
    return jsonify({"message": "Équipe modifiée avec succès"})

@equipe_bp.route('/equipes/<string:_id>', methods=['DELETE'])
def supprimer_une_equipe(_id):
    supprimer_equipe(_id)
    return jsonify({"message": "Équipe supprimée avec succès"})
