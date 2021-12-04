# https://www.acmicpc.net/problem/2606


CN = int(input())
NN = int(input())
arr = [list(map(int, input().split())) for i in range(NN)]

dic = {}
for i in range(1, CN+1):
    dic[i] = []

# print(dic, arr)

for i, k in arr:
    dic[i].append(k)
    dic[k].append(i)

# print(dic)

result = []


def bfs(t=1):
    global result
    for i in dic[t]:
        if i not in result:
            result.append(i)
            bfs(i)


bfs()
print(len(result)-1)
