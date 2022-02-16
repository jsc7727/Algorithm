# import sys
# input = sys.stdin.readline
# n = int(input().strip())
# lst = list(map(int, input().strip().split()))

# m = 0
# out = 0
# stack = 0
# result = [0] * n
# for i in range(n):
#     l = stack
#     if m < lst[i]:
#         m = lst[i]
#         out = l
#     else:
#         for k in range(l-1, out-1, -1):
#             if lst[k] > lst[i]:
#                 result[i] = (k+1)
#                 break
#     stack += 1
# print(*result)


import sys
input = sys.stdin.readline
n = int(input().strip())
lst = list(map(int, input().strip().split()))

m = 0
out = 0
stack = []
result = [0] * n
for i in range(n):
    while len(stack) > 0:
        if stack[-1][1] > lst[i]:
            break
        else:
            stack.pop()

    if len(stack) > 0:
        result[i] = stack[-1][0]+1

    stack.append([i, lst[i]])
print(*result)
