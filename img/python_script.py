import cv2

img = cv2.imread('/home/lenovo/Desktop/js/website/tamilselvan-eswaramoorthi.github.io/img/1.jpg')

img = cv2.resize(img, (700, 467))

cv2.imwrite('1.png',img)
