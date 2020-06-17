import cv2

img = cv2.imread('/home/lenovo/Desktop/js/website/tamilselvan-eswaramoorthi.github.io/img/xnr9649_how-to-develop-a-signature-event.jpg')

img = cv2.resize(img, (700, 467))

cv2.imwrite('2.png',img)
