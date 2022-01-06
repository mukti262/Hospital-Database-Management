use hospital;

drop table Hospital;

CREATE TABLE IF NOT EXISTS `Hospital` (
 `Hos_id` INT NOT NULL AUTO_INCREMENT,
 `Hos_name` VARCHAR(45) NOT NULL,
 `Address` VARCHAR(45) NOT NULL,
 `city` VARCHAR(45) NOT NULL,
 `zip` INT NOT NULL,
 PRIMARY KEY (`Hos_id`))
ENGINE = InnoDB;

drop table Doctor;

CREATE TABLE IF NOT EXISTS `Doctor` (
 `D_id` INT NOT NULL AUTO_INCREMENT,
 `D_name` VARCHAR(45) NOT NULL,
 `Address` VARCHAR(45) NOT NULL,
 `position` VARCHAR(45) NOT NULL,
 `phone` varchar(13) NOT NULL,
 `office` VARCHAR(45) NOT NULL,
 `city` VARCHAR(45) NOT NULL,
 `Zip` INT NOT NULL,
 `gender` VARCHAR(45) NOT NULL,
 `age` INT NOT NULL,
 PRIMARY KEY (`D_id`))
ENGINE = InnoDB;

drop table Nurse;

CREATE TABLE IF NOT EXISTS `Nurse` (
 `Nurse_id` INT NOT NULL AUTO_INCREMENT,
 `Nurse_name` VARCHAR(45) NOT NULL,
 `Department` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`Nurse_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Rooms` (
 `Room_number` INT NOT NULL,
 `Department` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`Room_number`))
ENGINE = InnoDB;

drop table Receptionist;

CREATE TABLE IF NOT EXISTS `Receptionist` (
 `R_id` INT NOT NULL AUTO_INCREMENT,
 `R_name` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`R_id`))
ENGINE = InnoDB;

drop table Insurance;

CREATE TABLE IF NOT EXISTS `Insurance` (
 `I_id` INT NOT NULL AUTO_INCREMENT,
 `Category` VARCHAR(45) NOT NULL,
 `phone` INT NOT NULL,
 `Address` VARCHAR(45) NOT NULL,
 `city` VARCHAR(45) NOT NULL,
 `zip` INT NOT NULL,
 `I_name` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`I_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `CPT` (
 `CPT_id` INT NOT NULL,
 `Category` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`CPT_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Diagnosis` (
 `diagnosis_id` INT NOT NULL,
 `category` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`diagnosis_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Medicine` (
 `MInventory_id` INT NOT NULL,
 `Manufacturer` VARCHAR(45) NOT NULL,
 `Price` INT NOT NULL,
 `M_name` VARCHAR(45) NOT NULL,
 `quantity` VARCHAR(45) NOT NULL,
 `Exp_date` varchar(11) NOT NULL,
 PRIMARY KEY (`MInventory_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Laboratory` (
 `lab_num` INT NOT NULL,
 `lab_name` VARCHAR(45) NOT NULL,
 `category` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`lab_num`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Patient` (
 `Patient_id` INT NOT NULL AUTO_INCREMENT,
 `phone` INT NOT NULL,
 `P_Name` VARCHAR(45) NOT NULL,
 `age` INT NOT NULL,
 `Gender` VARCHAR(45) NOT NULL,
 `address` VARCHAR(45) NOT NULL,
 `Zip` INT NOT NULL,
 `City` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`Patient_id`))
ENGINE = InnoDB;
drop table Invoice;
CREATE TABLE IF NOT EXISTS `Invoice` (
 `Invoice_num` INT NOT NULL AUTO_INCREMENT,
 `Invoice_date` varchar(11) NOT NULL,
 `Due_date` varchar(11) NOT NULL,
 `Amount` INT NOT NULL,
 PRIMARY KEY (`Invoice_num`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Paycheck` (
 `Chk_Num` INT NOT NULL AUTO_INCREMENT,
 `bonus` INT NOT NULL,
 `pay_date` varchar(11) NOT NULL,
 `salary` INT NOT NULL,
 PRIMARY KEY (`Chk_Num`))
ENGINE = InnoDB;
drop table Payment;
CREATE TABLE IF NOT EXISTS `Payment` (
 `PayTrans_Num` INT NOT NULL,
 `Pay_method` VARCHAR(45) NOT NULL,
 `Paid_date` varchar(11) NOT NULL,
 `pay_status` VARCHAR(45) NOT NULL,
 foreign key(PayTrans_Num) references Invoice(Invoice_num))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Record` (
`record_id` INT NOT NULL AUTO_INCREMENT,
 `patient_id` INT NOT NULL,
 `Description` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`record_id`),
FOREIGN KEY(patient_id) references Patient(Patient_id))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Appointments` (
 `app_number` INT NOT NULL AUTO_INCREMENT,
 `app_date` varchar(11) NOT NULL,
 PRIMARY KEY (`app_number`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Prescription` (
 `Prescription_id` INT NOT NULL AUTO_INCREMENT,
 `Medicine_quantity` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`Prescription_id`))
ENGINE = InnoDB;


