# https://www.acmicpc.net/problem/1599


dic = {'a': 'a',
       'b': 'b',
       'k': 'c',
       'd': 'd',
       'e': 'e',
       'g': 'f',
       'h': 'g',
       'i': 'h',
       'l': 'i',
       'm': 'j',
       'n': 'k',
       'ng': 'l',
       'o': 'm',
       'p': 'n',
       'r': 'o',
       's': 'p',
       't': 'q',
       'u': 'r',
       'w': 's',
       'y': 't', }
count = int(input())
l = [input() for _ in range(count)]

# print(l)
result = []
for iidx, i in enumerate(l):
    temp = ""
    check = False
    for idx in range(len(i)):
        if check:
            check = False
            continue
        if len(i) > idx+1 and i[idx] == 'n' and i[idx+1] == 'g':
            temp += dic['ng']
            check = True
        else:
            temp += dic[i[idx]]
    # print([temp, iidx])
    result.append([temp, iidx])

for i in sorted(result, key=lambda x: x[0]):
    print(l[i[1]])
