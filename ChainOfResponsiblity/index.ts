//authenticators
//logger
//compressor

import { Authenticator } from "./Authenticator";
import { Compressor } from "./Compressor";
import { HttpRequest } from "./HttpRequest";
import { Logger } from "./Looger";
import { Webserver } from "./WebServer";



var compressor = new Compressor(null);
var logger = new Logger(compressor);
var authenticator = new Authenticator(logger);

var server = new Webserver(authenticator);
server.handle(new HttpRequest("admin", "1234"));
