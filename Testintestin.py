import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_registro_y_login(driver):
    # === Paso 1: REGISTRO ===
    driver.get("https://alan-flores1.github.io/Eva1BFAF/Registro.html")

    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "formRegistro")))

    email = "selenium_test@duoc.cl"
    password = "test12"

    driver.find_element(By.ID, "nombre").send_keys("Usuario Selenium")
    driver.find_element(By.ID, "email").send_keys(email)
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.ID, "confirmar").send_keys(password)

    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    # Espera que ocurra la redirección automática hacia Sesion.html
    WebDriverWait(driver, 10).until(EC.alert_is_present())
    alert = driver.switch_to.alert
    print("Texto del alert:", alert.text)
    alert.accept()
    time.sleep(2)
    assert "Sesion.html" in driver.current_url, "No se redirigió a Sesion.html tras registrar."

    # === Paso 2: INICIO DE SESIÓN ===
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "formLogin")))
    driver.find_element(By.ID, "email").send_keys(email)
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    
    alert = driver.switch_to.alert
    print("Texto del alert:", alert.text)
    alert.accept()
    time.sleep(2)
    assert "index.html" in driver.current_url, "No se redirigió al index tras login."

    print("✅ Flujo completo de registro + login exitoso.")

if __name__ == "__main__":
    driver = webdriver.Chrome()
    test_registro_y_login(driver)
    driver.quit()
