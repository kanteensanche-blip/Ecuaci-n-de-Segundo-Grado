from flask import Flask, request, jsonify, json
from flask_cors import CORS
from Ecuacion_segundo_grado import calcular_soluciones

#Set up flask:
app = Flask(__name__)
#Set up Flask to bypass CORS at the front end:
cors = CORS(app)
@app.route("/ecuacion/<myjson>")
def postME1(myjson):
    datos = json.loads(myjson)
    resultado = calcular_soluciones(datos)
    resultado = jsonify(resultado)
    return resultado

#Run the app:
if __name__ == "__main__":
    app.run(debug=True)




