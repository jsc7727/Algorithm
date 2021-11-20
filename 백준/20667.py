# https://www.acmicpc.net/problem/20667

from operator import itemgetter, attrgetter

# input()
# input1 = [4, 8, 7]
# cpu = int(input1[1])
# memory = int(input1[2])
# temp = [[8, 1, 1],
#         [8, 2, 2],
#         [7, 1, 2],
#         [7, 3, 3], ]
# temp.sort(key=lambda x: (x[2], -x[0], -x[1]))
# result = 0
# count = 0
# while cpu > 0 and count < len(temp):
#     result += temp[count][2]
#     cpu -= temp[count][0]
#     memory -= temp[count][1]
#     count += 1
# temp = temp[count:]
# # print(temp, cpu, memory)
# count = 0
# temp.sort(key=lambda x: (x[2], -x[1]))
# while memory > 0 and count < len(temp):
#     result += temp[count][2]
#     memory -= temp[count][1]
#     count += 1
# if memory > 0:
#     print(-1)
# else:
#     print(result)

input1 = input().split()
inputCount = int(input1[0])
cpu = int(input1[1])
memory = int(input1[2])
temp = []
for idx in range(inputCount):
    inputList = input().split()
    i = [int(inputList[0]), int(inputList[1]), int(inputList[2])]
    temp.append(i)

temp.sort(key=lambda x: (x[2], -x[0], -x[1]))
result = 0
count = 0
while (cpu > 0 or memory > 0) and count < len(temp):
    result += temp[count][2]
    cpu -= temp[count][0]
    memory -= temp[count][1]
    count += 1
if memory > 0:
    print(-1)
else:
    print(result)
