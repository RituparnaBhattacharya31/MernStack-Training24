CREATE DATABASE  IF NOT EXISTS `todo_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `todo_app`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: todo_app
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `todo_id` int NOT NULL AUTO_INCREMENT,
  `task` varchar(225) DEFAULT NULL,
  `completed` varchar(45) DEFAULT NULL,
  `status` int DEFAULT '1',
  PRIMARY KEY (`todo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (9,'Reading book','Not completed',1),(10,'Meditating','Not completed',1),(11,'Doing yoga','Not completed',1);
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `password` varchar(225) DEFAULT NULL,
  `status` varchar(45) DEFAULT '1',
  `role` varchar(45) DEFAULT 'Admin',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'rchastelain0','Roxanne','Chastelain','Female','rchastelain0@shop-pro.jp','478-174-8143','gL8.JOHbt_','1','Admin'),(2,'aspafford1','Analise','Spafford','Female','aspafford1@theatlantic.com','277-131-4780','sS4*cL@}D\'.m6K','1','Admin'),(3,'churton2','Cris','Hurton','Male','churton2@tripadvisor.com','384-405-4093','sP0)Vg|U*ZaJbg0\'','1','Admin'),(4,'opetrov3','Orly','Petrov','Female','opetrov3@toplist.cz','123-180-0154','bI6)s#s)','1','Admin'),(5,'mbeckensall4','Mirabelle','Beckensall','Female','mbeckensall4@salon.com','365-458-7073','hA5~4sD2*','1','Admin'),(6,'sizhak5','Selma','Izhak','Female','sizhak5@blog.com','272-629-6580','bQ3%`eh7.&','1','Admin'),(7,'gwatkins6','Gray','Watkins','Female','gwatkins6@cnbc.com','668-499-5826','vU9,XX`b?xg','1','Admin'),(8,'bbottelstone7','Boniface','Bottelstone','Male','bbottelstone7@unc.edu','210-150-9625','aU0)qc=d','1','Admin'),(9,'barnald8','Britt','Arnald','Male','barnald8@gov.uk','757-653-8479','gF2|?05Gznv','1','Admin'),(10,'mlindholm9','Marje','Lindholm','Female','mlindholm9@cmu.edu','188-373-9822','bL1=\"##WcBk4C\"','1','Admin'),(11,'bmcterlagha','Burnaby','McTerlagh','Male','bmcterlagha@sbwire.com','733-611-5879','pE7&&yyQ\\Yr','1','Admin'),(12,'mamerb','Moll','Amer','Female','mamerb@sciencedirect.com','792-111-3645','pI4\'IL!vbT_~<<(','1','Admin'),(13,'fkolinc','Faber','Kolin','Male','fkolinc@redcross.org','324-831-5238','pI9\'{2{o&!h','1','Admin'),(14,'cberrymand','Clemmy','Berryman','Male','cberrymand@csmonitor.com','501-300-8097','hI6_69Rz</m{e1','1','Admin'),(15,'bsummerliee','Brett','Summerlie','Male','bsummerliee@mail.ru','336-252-5689','vP2>yP9f=.6%','1','Admin'),(16,'cdoughartyf','Cordell','Dougharty','Male','cdoughartyf@intel.com','458-519-0558','fY3.h>OwA!B3','1','Admin'),(17,'tersking','Trina','Erskin','Female','tersking@cbsnews.com','628-871-4256','wU4+mR1(_b#Pa','1','Admin'),(18,'swimsetth','Shelley','Wimsett','Male','swimsetth@shop-pro.jp','400-532-5941','wW0=eHm7IETox!S','1','Admin'),(19,'hbrimblei','Hyman','Brimble','Male','hbrimblei@scientificamerican.com','420-743-0855','tO9~lFqwk','1','Admin'),(20,'colliffej','Chloette','Olliffe','Polygender','colliffej@cyberchimps.com','138-845-0531','qV8&x2RaV_?&L)','1','Admin'),(21,'pwilcottk','Pooh','Wilcott','Female','pwilcottk@nbcnews.com','573-335-2202','eV1}u<\'%5','1','Admin'),(22,'scottagel','Shelby','Cottage','Male','scottagel@sourceforge.net','579-373-6032','kO6/,E02Mr','1','Admin'),(23,'rcrasswellm','Ricki','Crasswell','Male','rcrasswellm@salon.com','858-143-6506','oZ7*KC/m\'X(ZU','1','Admin'),(24,'jbranfordn','Jessie','Branford','Female','jbranfordn@usnews.com','893-885-5568','wY1@\\}PxjqW4','1','Admin'),(25,'candreseno','Celina','Andresen','Female','candreseno@wikispaces.com','393-444-6094','zU0\\>szFF4Eb','1','Admin'),(26,'shalgarthp','Shirlene','Halgarth','Female','shalgarthp@un.org','865-795-2107','aF8+Pz6k@','1','Admin'),(27,'hhellenq','Harmony','Hellen','Bigender','hhellenq@alibaba.com','640-891-7079','gH1?Ry//7}','1','Admin'),(28,'krosenauerr','Kelwin','Rosenauer','Male','krosenauerr@merriam-webster.com','237-112-3567','lW8+/Xbfd\'NEmMi','1','Admin'),(29,'tbloxsoms','Tucky','Bloxsom','Male','tbloxsoms@posterous.com','920-662-5677','qK3`j={7@,YlJ','1','Admin'),(30,'cbirtonshawt','Ciel','Birtonshaw','Female','cbirtonshawt@utexas.edu','949-941-8794','jU1)N.\\Owc{/ra','1','Admin'),(31,'tfelipu','Terra','felip','Female','tfelipu@list-manage.com','498-781-4516','fU4./yhtG7grUgjl','1','Admin'),(32,'pcalladinev','Pris','Calladine','Female','pcalladinev@1und1.de','318-244-0388','jW9_WY!o%P~Q&T`','1','Admin'),(33,'kocoskerryw','Karola','O\'Coskerry','Female','kocoskerryw@imgur.com','839-961-4714','kE6`F0sTrcJ\"A!e\"','1','Admin'),(34,'malbersx','Merrily','Albers','Female','malbersx@thetimes.co.uk','830-888-9514','gZ3\"mx89oSan|e\"','1','Admin'),(35,'vgrevely','Vikky','Grevel','Female','vgrevely@tripadvisor.com','205-980-8296','oH3\'/FC\'DWr,','1','Admin'),(36,'rvarkerz','Roberto','Varker','Male','rvarkerz@hp.com','919-311-9178','rU2>`bO@C#2W)P','1','Admin'),(37,'cgoullee10','Catharine','Goullee','Female','cgoullee10@sohu.com','407-732-4566','xP7*!rj!nogLup','1','Admin'),(38,'ncolaco11','Normand','Colaco','Male','ncolaco11@shop-pro.jp','165-939-5532','oB1_!nWH\\X~I$2','1','Admin'),(39,'eearwicker12','Earvin','Earwicker','Male','eearwicker12@163.com','944-170-6193','eR0*%=P@0@n7t','1','Admin'),(40,'lrasor13','Leupold','Rasor','Male','lrasor13@blog.com','730-498-9359','dE4!$J{muI#','1','Admin'),(41,'swollaston14','Shawn','Wollaston','Female','swollaston14@printfriendly.com','253-700-5322','bA1\'Lay`iOnj#','1','Admin'),(42,'twannell15','Thomasin','Wannell','Female','twannell15@macromedia.com','328-736-5447','rP0\'pOTdTH\\=/xc','1','Admin'),(43,'rbinley16','Ramsey','Binley','Male','rbinley16@npr.org','382-480-9352','nQ1%&/D#aYJ0CS#','1','Admin'),(44,'eglover17','Emalee','Glover','Female','eglover17@time.com','288-433-0325','mV1>yjaS*$WJ\'u','1','Admin'),(45,'kharlett18','Katrine','Harlett','Female','kharlett18@google.com.au','154-251-4056','gP6\\Ue`F','1','Admin'),(46,'mstennet19','Marcellina','Stennet','Female','mstennet19@youtube.com','347-527-6181','sJ6<Nj\"H+Va\"','1','Admin'),(47,'dbathoe1a','Dav','Bathoe','Male','dbathoe1a@globo.com','972-351-9678','iL9<b2(`ep&Z6','1','Admin'),(48,'dbarnewall1b','Davidson','Barnewall','Male','dbarnewall1b@bloglovin.com','901-816-0678','aV4~Uf\'0gQ@b','1','Admin'),(49,'tchadbourn1c','Troy','Chadbourn','Male','tchadbourn1c@hubpages.com','584-311-7085','yJ1)}N}i&d~=GU','1','Admin'),(50,'bmarcu1d','Brenden','Marcu','Male','bmarcu1d@dailymotion.com','320-998-0252','mJ0$wh7).L{_*O','1','Admin'),(51,'nverzey1e','Neall','Verzey','Male','nverzey1e@apache.org','215-517-6404','pK9\\.7>Xcq1rdB','1','Admin'),(52,'kcarradice1f','Karolina','Carradice','Female','kcarradice1f@blinklist.com','919-621-9890','kK9}6A%B\'/e/}\"\"','1','Admin'),(53,'ctreven1g','Clarke','Treven','Genderqueer','ctreven1g@go.com','555-852-4703','kX1~\'R\\&','1','Admin'),(54,'jmcdonell1h','Jecho','McDonell','Polygender','jmcdonell1h@google.co.uk','108-822-1836','aW9|fr6x6v!','1','Admin'),(55,'oather1i','Olag','Ather','Male','oather1i@qq.com','827-546-6077','sV7@xqGTmtVQ9.h','1','Admin'),(56,'iobee1j','Isadore','Obee','Male','iobee1j@ucsd.edu','860-362-7901','zI4!Z4r0`','1','Admin'),(57,'agoodinson1k','Andrea','Goodinson','Female','agoodinson1k@hud.gov','760-357-4167','qS1\\|W~RN','1','Admin'),(58,'hjoscelyne1l','Hernando','Joscelyne','Male','hjoscelyne1l@netscape.com','936-344-3243','gI5&p?{Y=CF7%B','1','Admin'),(59,'hperrie1m','Hoebart','Perrie','Male','hperrie1m@stanford.edu','225-902-3180','sK9\\5G<R&qh','1','Admin'),(60,'lcoplestone1n','Lefty','Coplestone','Male','lcoplestone1n@barnesandnoble.com','840-736-2457','cR0\"rL8oJ>Vofn\"','1','Admin'),(61,'santonich1o','Sydney','Antonich','Male','santonich1o@ebay.com','910-131-3659','xY0#gh>H','1','Admin'),(62,'jherley1p','Julian','Herley','Male','jherley1p@ihg.com','500-857-0859','qU4|X$f{NKrBMPHp','1','Admin'),(63,'gklaessen1q','Guillermo','Klaessen','Male','gklaessen1q@reddit.com','777-509-9299','vE5,<GHKI?)G((/','1','Admin'),(64,'jseargeant1r','Joy','Seargeant','Female','jseargeant1r@naver.com','326-814-4669','hY0%f,y2kxJuKtQ','1','Admin'),(65,'apollie1s','Allen','Pollie','Male','apollie1s@mac.com','498-863-1256','bF9>SzslqY','1','Admin'),(66,'gshiril1t','Gayle','Shiril','Male','gshiril1t@nytimes.com','991-314-1442','pN8}Agg1zNkx(','1','Admin'),(67,'hmuschette1u','Halsey','Muschette','Male','hmuschette1u@wordpress.com','849-708-5017','fM8*r}z0<X1s','1','Admin'),(68,'rshawdforth1v','Rancell','Shawdforth','Male','rshawdforth1v@yandex.ru','518-642-7460','xV9%#)B8l','1','Admin'),(69,'alorenzo1w','Agosto','Lorenzo','Male','alorenzo1w@deliciousdays.com','494-165-5549','nR7+\'.$H%/2J@/e','1','Admin'),(70,'egiovannelli1x','Ertha','Giovannelli','Female','egiovannelli1x@unesco.org','190-824-8985','rB0*FaEjJmu4i','1','Admin'),(71,'bgambles1y','Bernete','Gambles','Female','bgambles1y@photobucket.com','197-978-6365','zV5`qrf,\'k,L)x!','1','Admin'),(72,'laird1z','Laura','Aird','Female','laird1z@buzzfeed.com','403-345-0141','wI9&XFEq?<Q3N','1','Admin'),(73,'gryott20','Georgetta','Ryott','Female','gryott20@auda.org.au','493-782-0350','qG1~vv&GG','1','Admin'),(74,'tvanderbeken21','Tony','Van der Beken','Polygender','tvanderbeken21@desdev.cn','514-618-3475','rZ0{H{+z)O#MbIJ','1','Admin'),(75,'jemmanuel22','Julian','Emmanuel','Male','jemmanuel22@cbsnews.com','279-566-5553','cD0=e\'4b#+or','1','Admin'),(76,'mwinkworth23','Martie','Winkworth','Male','mwinkworth23@weibo.com','186-376-9981','lT6=n8qA1,O','1','Admin'),(77,'pdoby24','Peta','Doby','Female','pdoby24@howstuffworks.com','682-257-3190','pW7~#p22y3','1','Admin'),(78,'gbalkwill25','Giuseppe','Balkwill','Bigender','gbalkwill25@narod.ru','495-762-8110','aM7&*s@)lLgj','1','Admin'),(79,'cmcturk26','Corrinne','McTurk','Female','cmcturk26@si.edu','468-141-5426','dJ6@nGGgv7`V))rt','1','Admin'),(80,'chuckleby27','Conrade','Huckleby','Male','chuckleby27@ask.com','733-207-5943','eG2|U0_P.dkI','1','Admin'),(81,'nmcalroy28','Nancie','McAlroy','Female','nmcalroy28@noaa.gov','659-172-7264','cP5>a}f?1bpP_Ri','1','Admin'),(82,'lrogeron29','Lilith','Rogeron','Female','lrogeron29@studiopress.com','973-899-4066','bZ3|x.?qo#(%?C','1','Admin'),(83,'abaus2a','Aube','Baus','Male','abaus2a@aol.com','656-301-5989','kF7\"bty)67\"','1','Admin'),(84,'cwilford2b','Cristine','Wilford','Female','cwilford2b@jalbum.net','613-662-7782','jH8\\N`tCNdcsi','1','Admin'),(85,'rdominique2c','Rhianon','Dominique','Female','rdominique2c@weibo.com','361-203-7115','xT6>CB??\\D','1','Admin'),(86,'jantrobus2d','Jonas','Antrobus','Male','jantrobus2d@t.co','475-717-5197','hI9!ILuY0ke','1','Admin'),(87,'hnassy2e','Harlene','Nassy','Non-binary','hnassy2e@howstuffworks.com','291-937-6949','nW7)K8P@>yes0&','1','Admin'),(88,'wference2f','Wyatan','Ference','Male','wference2f@blogspot.com','635-940-2541','cR5,hZ$oO','1','Admin'),(89,'mabramovitch2g','Monique','Abramovitch','Female','mabramovitch2g@deliciousdays.com','284-264-6891','hO7|N6.+lQ$0f','1','Admin'),(90,'sfist2h','Sandye','Fist','Female','sfist2h@google.ru','664-907-9393','mU7<ghcLjy\\a*Y+d','1','Admin'),(91,'bbeatens2i','Belvia','Beatens','Female','bbeatens2i@unblog.fr','970-866-5580','jO6(JR%5DC*H','1','Admin'),(92,'dbourges2j','Dreddy','Bourges','Female','dbourges2j@ca.gov','325-705-8124','uN1_7dYyJ','1','Admin'),(93,'dpulley2k','Darb','Pulley','Male','dpulley2k@vk.com','656-324-8164','qR2{bcK#.}*q&','1','Admin'),(94,'kjonah2l','Kristin','Jonah','Female','kjonah2l@scientificamerican.com','965-633-0526','dZ8|B%4_e%}NL+','1','Admin'),(95,'lditts2m','Lauren','Ditts','Female','lditts2m@alibaba.com','251-224-5887','gZ2\"i','1','User'),(96,'rlecount2n','Reg','Le Count','Male','rlecount2n@wufoo.com','260-889-7378','fT9?/8$br','1','User'),(97,'kkinny2o','Katuscha','Kinny','Female','kkinny2o@a8.net','633-207-3223','gF9_OO$*TWp\'8W','1','User'),(98,'csimecek2p','Casey','Simecek','Female','csimecek2p@bing.com','129-586-4279','jL9`P}#{5','1','User'),(99,'cadnet2q','Codi','Adnet','Male','cadnet2q@uol.com.br','591-146-2632','pS0`Ic6dF4(','1','User'),(100,'smellanby2r','Spence','Mellanby','Male','smellanby2r@meetup.com','695-557-3518','oU4.9U`/.P7,a&y','1','User');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-28 14:31:14
