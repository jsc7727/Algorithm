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


import sys
input = sys.stdin.readline
count, cpuLimit, memoryLimit = map(int, input().strip().split())
# arr = [list(map(int, input().strip().split())) for _ in range(count)]
arr = []
useCpu = 0
useMemory = 0
priority = float('inf')
for i in range(count):
    x, y, z = map(int, input().strip().split())
    useCpu = max(useCpu, x)
    useMemory = max(useMemory, y)
    arr.append([x, y, z])


arr.sort(key=lambda x: (x[2], x[0], x[1]))
for i in arr:
    print(i)

for i in range(len(arr)):
    cpuSum = 0
    memorySum = 0
    prioritySum = 0
    for k in range(i, len(arr)):
        currentCpu, currentMemory, currentPriority = arr[k]
        print("asdf", useCpu-(cpuSum+currentCpu),
              useMemory-(memorySum+currentMemory), prioritySum + currentPriority)
        if useCpu-(cpuSum+currentCpu) < cpuLimit and useMemory-(memorySum+currentMemory) < memoryLimit:
            cpuSum += currentCpu
            memorySum += currentMemory
            prioritySum += currentPriority
        else:
            break
    print(cpuSum, memorySum, prioritySum)
    if priority > prioritySum:
        priority = prioritySum

print(priority)
