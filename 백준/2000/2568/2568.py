def Lower_Bound(lst, num):
    low = 0
    high = len(lst) - 1
    while (low < high):
        mid = int((low + high) / 2)
        if num <= lst[mid]:
            high = mid
        elif num > lst[mid]:
            low = mid + 1
    return high


dic = {}
lst = []
lis = [-1]
result = []
backtrace = []
n = int(input())
for i in range(n):
    a, b = map(int, input().split(' '))
    dic[b] = a
temp = sorted(dic)
for i in temp:
    lst.append(dic.get(i))
for i in lst:
    if i > lis[-1]:
        lis.append(i)
    else:
        lis[Lower_Bound(lis, i)] = i
    result.append(lis.index(i)+1)
    print(lis, result)
lisLength = len(lis)
for i in range(len(lst)-1, -1, -1):
    if result[i] == lisLength:
        backtrace.append(lst[i])
        lisLength -= 1
print(backtrace)
print(n - (len(lis) - 1))
lst.sort()
for i in backtrace:
    lst.remove(i)
for i in lst:
    print(i)
