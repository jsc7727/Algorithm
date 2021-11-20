temp1 = input()
temp2 = input()
dict = {}
for i in temp2:
    if i in dict:
        dict[i] += 1
    else:
        dict[i] = 1
m = max(dict,key=dict.get)
print(m+" "+str(dict[m]))
