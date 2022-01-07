# import collections


# def removeDuplicateLetters(s: str) -> str:
#     counter, seen, stack = collections.Counter(s), set(), []
#     print(sorted(counter.items(), key=lambda x: x[0]))

#     for char in s:
#         counter[char] -= 1
#         if char in seen:
#             continue
#         while stack and char < stack[-1] and counter[stack[-1]] > 0:
#             seen.remove(stack.pop())
#         stack.append(char)
#         seen.add(char)

#     return ''.join(stack)


# print(removeDuplicateLetters("asdsdsfqq"))

# for k in range(1, 1000):
#     if ((5300 + (9*k)) - (1000 + (2*k*k))) < 0:
#         print("break", k)
#         break
#     print(5300 + (9*k), 1000 + (2*k*k), (300 + (9*k)) - (1000 + (2*k*k)))
# import sys
# input = sys.stdin.readline
# n, m = map(int, input().strip().split())
# result = []
# for _ in range(n):
#     temp = list(input().strip())
#     for i in range(m)[::-1]:
#         if temp[i] != '.':
#             temp[m-1-i] = temp[i]
#     result.append("".join(temp))
# for i in result:
#     print(i)


from collections import deque

dic = {
    "MO":0,
    "TU":1,
    "WE":2,
    "TH":3,
    "FR":4
}
dt = 1440

def getTime(s):
    sSplit = s.split()
    day = sSplit[0]
    HH = sSplit[1].split(':')[0]
    MM = sSplit[1].split(':')[1]
    return (dic[day]*dt) + (int(HH)*60) + int(MM)

def timeChecker(arr):
    checkList = [0]*7200
    for i in arr:
        if len(i) > 8:
            i = [i[:8],i[9:]]
        else:
            i = [i]
        for k in range(len(i)):
            i[k] = getTime(i[k])
        if len(i) == 1:
            for j in range(i[0],i[0]+360+1):
                if checkList[j] == 0:
                    checkList[j] = 1
                else:
                    return False
        elif len(i) == 2:
            for j in range(i[0],i[1]+1):
                if checkList[j] == 0:
                        checkList[j] = 1
                else:
                    return False
    return True

def solution(schedule):
    answer = -1
    stack = [[i] for i in schedule[0]]
    for i in range(1,5):
        temp = []
        for j in stack:
            for k in schedule[i]:
                temp.append(j+[k])
        stack = temp
    print(stack[0][1])
    print(getTime(stack[0][1]))
    
    return answer