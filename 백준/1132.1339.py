# https://www.acmicpc.net/problem/1132
# 합

# input
# 2
# ABC
# BCA

# output
# 1875


c = int(input())
dic = {}
inputList = []
answer = 0
oneChekList = []
for i in range(c):
    s = input().split()[0]

    oneChekList.append(s[0])

    inputList.append(s)
    for idx, j in enumerate(s[::-1]):
        if j in dic:
            dic[j] = dic[j] + 10 ** idx
        else:
            dic[j] = 10 ** idx

# print(dict(sorted(dic.items(), key=lambda item: -item[1])))
result = list(dict(sorted(dic.items(), key=lambda item: -item[1])).keys())

if len(result) == 10:
    for i in range(len(result)-1, -1, -1):
        if result[i] not in oneChekList:
            a = result.pop(i)
            dic[a] = '0'
            break

count = 0
for i in range(9, 9-len(result), -1):
    dic[result[count]] = str(i)
    count += 1
# print(dic)

for i in range(len(inputList)):
    ss = ""
    for j in range(len(inputList[i])):
        ss += dic[inputList[i][j]]
    answer += int(ss)
print(answer)
