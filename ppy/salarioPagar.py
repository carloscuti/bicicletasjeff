# Pedir el nombre del empleado, y las horas laboradas
nombre=input("Digite nombre del empleador:")
horas=float(input("Digite el numero de horas laboradas:"))
if horas<=50:
    salario=horas*5.833333333333333
else:
    salario=(horas-50)*5.8428571428571425 + 50*5.833333333333333
print("El nombre del empleado es:",nombre)
print("Su salario a pagar es:",salario)
