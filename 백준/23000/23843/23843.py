import sys
import heapq

input = sys.stdin.readline
N, M = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))

# maxheap 사용할 때
# arr = [(-i, i) for i in arr]

# 정렬 사용할 때
arr.sort()

heapq.heapify(arr)


def solution():
    count = 0
    taskList = []
    while len(arr) > 0 or len(taskList) > 0:
        print("count : ", count+1)
        print("before => arr : ", arr, " / taskList : ", taskList)
        count += 1
        while arr and len(taskList) < M:
            # maxheap 사용할 때
            # heapq.heappush(taskList, heapq.heappop(arr)[1])

            # 정렬 사용할 때
            heapq.heappush(taskList, arr.pop())
        for i in range(len(taskList)):
            taskList[i] -= 1

        while len(taskList) > 0 and taskList[0] == 0:
            heapq.heappop(taskList)
        print("after => arr : ", arr, " / taskList : ", taskList)
        print()
    return count


result = solution()
print(result)


# n, m = map(int, input().split())
# r = ans = 0
# for v in sorted(map(int, input().split()))[::-1]:
#     if r == 0:
#         r = v*m
#         ans += v
#     r -= v
#     print(r, ans)
# print(ans)
