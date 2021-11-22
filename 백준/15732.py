
import sys
input = sys.stdin.readline

n, k, d = map(int, input().split())
# print(n, k, d)
arr = [list(map(int, input().strip().split())) for i in range(k)]
# print(arr)


def getDotoli(mid):
    temp = 0
    for x, y, z in arr:
        y = min(mid, y)
        if x <= y:
            temp += ((y - x) // z)
            temp += 1
    return temp


p1 = 1
p2 = 1000000
result = 0
while p2 >= p1:
    mid = p1 + ((p2 - p1) // 2)
    # print(p2, p1, mid, getDotoli(mid))

    if getDotoli(mid) >= d:
        result = mid
        p2 = mid - 1
    else:
        p1 = mid + 1

print(result)
