import { CustomerService } from "./CustomerService";
import { AddCustomerCommand } from "./fx/AddCustomerCommand";
import { Button } from "./fx/Button";

var service = new CustomerService();
var command = new AddCustomerCommand(service);
var button = new Button(command);
button.click();
