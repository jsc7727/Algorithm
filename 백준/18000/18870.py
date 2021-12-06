# https://www.acmicpc.net/problem/18870

# 5
# 2 4 -10 4 -9


# dict 쓸줄알면 통과하는 문제
# set 써서 중복제거한담에
# 나는 set 쓰지 않았지만 그래서 많이 느린가보다.
# 정렬하고
# 출력하면 끝

import sys
input = sys.stdin.readline
c = int(input().strip())
arr1 = list(map(int, input().strip().split()))
arr2 = list(enumerate(arr1))
arr2.sort(key=lambda x: (x[1], x[0]))
# print(arr2)
dic = {}

count = 0
for x, y in arr2:
    if y not in dic:
        dic[y] = count
        count += 1
# print(dic)
for i in arr1:
    print(dic[i], end=' ')
