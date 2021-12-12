# https://www.acmicpc.net/problem/1874


# stack 사용해서 


import sys
input = sys.stdin.readline
count = int(input().strip())
result = []
stack = []
arr = [int(input().strip()) for _ in range(count)][::-1]
m = max(arr)
for i in range(1, m+1):
    stack.append(i)
    result.append('+')
    if arr and arr[-1] > i:
        continue
    while arr and stack and arr[-1] <= i:
        if arr[-1] == stack[-1]:
            arr.pop()
            stack.pop()
            result.append('-')
        else:
            stack.pop()
            result.append('-')
    # print(arr, stack, result)

if arr:
    print("NO")
else:
    for i in result:
        print(i)
