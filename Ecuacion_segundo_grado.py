import math
def calcular_soluciones(datos):
    a = float(datos[0])
    b = float(datos[1])
    c = float(datos[2])
    discriminante = b**2 - 4*a*c
    if a == 0:
        resultado = ["ERROR"]
        return resultado
    elif discriminante < 0:
        resultado = [0]
        return resultado
    elif discriminante == 0:
        x = (-b) / (2*a)
        resultado = [1, x]
        return resultado
    else:
        x1 = (-b + math.sqrt(discriminante)) / (2*a)
        x2 = (-b - math.sqrt(discriminante)) / (2*a)
        resultado = [2, x1, x2]
        return resultado
    

    
    