# https://www.acmicpc.net/problem/1713

# 3
# 9
# 2 1 4 3 5 6 2 7 2

from collections import deque
import sys
input = sys.stdin.readline
n = int(input().strip())
int(input().strip())
inputArray = list(map(int, input().strip().split()))
result = deque([])
checkList = [0]*101

for i in inputArray:
    # if i not in result:
    #     if len(result) >= n:
    #         result = sorted(result, key=lambda x: (checkList[x], x))
    #         checkList[result[0]] = 0
    #         result = result[1:]
    #     result.append(i)

    # checkList[i] += 1
    # print(result)
    

print(*sorted(result))
