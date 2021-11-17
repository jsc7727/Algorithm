# n^2 배열 자르기
# https://programmers.co.kr/learn/courses/30/lessons/87390

def solution(n, left, right):
    temp = []
    for i in range(int(left),int(right)+1):
        line = i//n + 1
        place = i%n+1
        if place < line:
            temp.append(line)
        else:
            temp.append(place)
    return temp