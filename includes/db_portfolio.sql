-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 10, 2018 at 12:05 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_content`
--

DROP TABLE IF EXISTS `tbl_content`;
CREATE TABLE IF NOT EXISTS `tbl_content` (
  `id` int(200) UNSIGNED NOT NULL AUTO_INCREMENT,
  `thumb_name` varchar(200) NOT NULL,
  `image_name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_content`
--

INSERT INTO `tbl_content` (`id`, `thumb_name`, `image_name`) VALUES
(1, 'mobile_hole.png', 'hole'),
(2, 'mobile_hole2.png', 'hole2'),
(3, 'mobile_hole3.png', 'hole3'),
(4, 'mobile_hole4.png', 'hole4'),
(15, 'mobile_dummy3.png', 'dummy3'),
(14, 'mobile_dummy2.png', 'dummy2'),
(13, 'mobile_dummy.png', 'dummy'),
(5, 'mobile_orb.png', 'orb'),
(6, 'mobile_orb2.png', 'orb2'),
(7, 'mobile_orb3.png', 'orb3'),
(8, 'mobile_orb4.png', 'orb4'),
(9, 'mobile_alive.png', 'alive'),
(10, 'mobile_alive2.png', 'alive2'),
(11, 'mobile_alive3.png', 'alive3'),
(12, 'mobile_alive4.png', 'alive4'),
(16, 'mobile_dummy4.png', 'dummy4'),
(17, 'mobile_agency.png', 'agency'),
(18, 'mobile_agency2.png', 'agency2'),
(19, 'mobile_agency3.png', 'agency3'),
(20, 'mobile_agency4.png', 'agency4'),
(21, 'mobile_abstract.png', 'abstract'),
(22, 'mobile_abstract2.png', 'abstract2'),
(23, 'mobile_abstract3.png', 'abstract3'),
(24, 'mobile_abstract4.png', 'abstract4'),
(25, 'mobile_particle.png', 'particle'),
(26, 'mobile_particle2.png', 'particle2'),
(27, 'mobile_particle3.png', 'particle3'),
(28, 'mobile_particle4.png', 'particle4'),
(31, 'mobile_hole5.png', 'hole5'),
(32, 'mobile_hole6.png', 'hole6'),
(33, 'mobile_orb5.png', 'orb5'),
(34, 'mobile_orb6.png', 'orb6'),
(35, 'mobile_alive5.png', 'alive5'),
(36, 'mobile_alive6.png', 'alive6'),
(37, 'mobile_dummy5.png', 'dummy5'),
(38, 'mobile_dummy6.png', 'dummy6'),
(39, 'mobile_agency5.png', 'agency5'),
(40, 'mobile_agency6.png', 'agency6'),
(41, 'mobile_abstract5.png', 'abstract5'),
(42, 'mobile_abstract6.png', 'abstract6'),
(29, 'mobile_particle5.png', 'particle5'),
(30, 'mobile_particle6.png', 'particle6'),
(45, 'mobile_bottle.png', 'bottle'),
(46, 'mobile_bottle2.png', 'bottle2'),
(47, 'mobile_bottle3.png', 'bottle3'),
(48, 'mobile_bottle4.png', 'bottle4'),
(49, 'mobile_bottle5.png', 'bottle5'),
(50, 'mobile_bottle6.png', 'bottle6'),
(51, 'vid1.png', 'vid1'),
(52, 'vid2.png', 'vid2'),
(53, 'vid3.png', 'vid3'),
(54, 'vid4.png', 'vid4'),
(55, 'vid5.png', 'vid5'),
(56, 'vid6.png', 'vid6'),
(57, 'vid7.png', 'vid7'),
(58, 'vid8.png', 'vid8'),
(59, 'vid9.png', 'vid9'),
(60, 'vid10.png', 'vid10'),
(61, 'vid11.png', 'vid11'),
(62, 'vid12.png', 'vid12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
