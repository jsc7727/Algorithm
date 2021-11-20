# https://www.acmicpc.net/problem/1374

# input
# 8
# 6 15 21
# 7 20 25
# 1 3 8
# 3 2 14
# 8 6 27
# 2 7 13
# 4 12 18
# 5 6 20

# output
# 5


# count = int(input())
# inputList = []
# m = 0
# for i in range(count):
#     a = list(map(int, input().split()))
#     m = max(m, max(a))
#     inputList.append(a)

# result = sorted(inputList, key=lambda x: (x[1], x[2]))

# lst = []
# answer = 0
# time = 0
# index = 0
# # while time != m:
# #     count = 0
# #     # for idx, i in enumerate(result):
# #     #     if i[1] <= time and i[1] < i[2] and time < i[2]:
# #     #         count += 1
# #     while (result[index][1] <= time and result[index][1] < result[index][2] and time < result[index][2]) or index == len(result):
# #         count += 1
# #         index += 1
# #     if(answer < count):
# #         answer = count
# # time += 1

# for idx,i in enumerate(result):
#     if i[1] == time:
#         i[]


# print(answer)

import heapq
count = int(input())
inputHeq = []
answerHeq = []
for i in range(count):
    idx, start, end = list(map(int, input().split()))
    heapq.heappush(inputHeq, [start, end])

start, end = heapq.heappop(inputHeq)
heapq.heappush(answerHeq, end)
while inputHeq:
    start, end = heapq.heappop(inputHeq)
    if answerHeq[0] <= start:
        heapq.heappop(answerHeq)
    heapq.heappush(answerHeq, end)

print(len(answerHeq))
