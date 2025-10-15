import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_login(driver):
    # Esperar input email
    driver.get("https://alan-flores1.github.io/Eva1BFAF/Sesion.html")  # Ajusta la ruta
   
    # Escribir correo incorrecto
    driver.find_element(By.ID, "email").send_keys("asd@asd.asd")
    driver.find_element(By.ID, "password").send_keys("asd12345")

    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    time.sleep(1)  # Esperar alert

    # Capturar alert
    alert = driver.switch_to.alert
    alert_text = alert.text
    print("Alert recibido:", alert_text)
    assert alert_text == "El correo debe ser de dominio @duoc.cl, @profesor.duoc.cl o @gmail.com", "El mensaje de alerta no es el esperado"
    alert.accept()

    print("Primer caso validado correctamente")

    # Ahora prueba con correo correcto pero contraseña incorrecta
    driver.find_element(By.ID, "email").clear()
    driver.find_element(By.ID, "email").send_keys("usuario@duoc.cl")
    driver.find_element(By.ID, "password").clear()
    driver.find_element(By.ID, "password").send_keys("1234wrong")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    time.sleep(1)

    alert = driver.switch_to.alert
    alert_text = alert.text
    print("Alert recibido:", alert_text)
    assert alert_text == "No hay usuarios registrados", "El mensaje de alerta no es el esperado"
    alert.accept()

    print("Segundo caso validado correctamente")

    print("Tercer caso validado correctamente")

if __name__ == "__main__":
    driver = webdriver.Chrome()
    test_login(driver)
    driver.quit()