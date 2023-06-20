import json


file = open('/home/joao/ENGWEB2023-Recurso/dataset_operacoes_estetica.json','r')
operacoes = json.load(file)
i=0
for op in operacoes:
    i+=1
    op["_id"] = i

with open("/home/joao/ENGWEB2023-Recurso/dataset_operacoes_estetica.json", "w") as outfile:
    json.dump(operacoes, outfile,indent=5)