-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2016 at 09:20 AM
-- Server version: 5.5.49-log
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rw`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_anggota_keluarga`
--

CREATE TABLE IF NOT EXISTS `tb_anggota_keluarga` (
  `kode_keluarga` int(11) NOT NULL,
  `no_identitas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_anggota_keluarga`
--

INSERT INTO `tb_anggota_keluarga` (`kode_keluarga`, `no_identitas`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_iuran`
--

CREATE TABLE IF NOT EXISTS `tb_iuran` (
  `kode_iuran` int(11) NOT NULL,
  `kode_keluarga` int(11) NOT NULL,
  `tanggal_bayar` date NOT NULL,
  `bulan_iuran` varchar(25) NOT NULL,
  `tahun_iuran` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_iuran`
--

INSERT INTO `tb_iuran` (`kode_iuran`, `kode_keluarga`, `tanggal_bayar`, `bulan_iuran`, `tahun_iuran`) VALUES
(1, 1, '2016-12-04', 'Januari', '2016'),
(2, 2, '2016-12-03', 'Januari', '2016');

-- --------------------------------------------------------

--
-- Table structure for table `tb_keluarga`
--

CREATE TABLE IF NOT EXISTS `tb_keluarga` (
  `kode_keluarga` int(11) NOT NULL,
  `no_identitas_kepala_keluarga` int(11) NOT NULL,
  `kode_akses` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_keluarga`
--

INSERT INTO `tb_keluarga` (`kode_keluarga`, `no_identitas_kepala_keluarga`, `kode_akses`) VALUES
(1, 1, '1'),
(2, 2, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tb_penduduk`
--

CREATE TABLE IF NOT EXISTS `tb_penduduk` (
  `no_identitas` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tempat_lahir` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `rt/rw` varchar(255) NOT NULL,
  `kel/desa` varchar(255) NOT NULL,
  `kecamatan` varchar(255) NOT NULL,
  `agama` varchar(255) NOT NULL,
  `status_perkawinan` varchar(12) NOT NULL,
  `status_kependudukan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_penduduk`
--

INSERT INTO `tb_penduduk` (`no_identitas`, `nama`, `tempat_lahir`, `tanggal_lahir`, `alamat`, `rt/rw`, `kel/desa`, `kecamatan`, `agama`, `status_perkawinan`, `status_kependudukan`) VALUES
(1, 'Azam', 'Bandung', '1994-10-12', 'Jl.Dr.Jundjunan 32', '05/10', 'Sukajadi', 'Sukabungah', 'Islam', 'Belum Kawin', 'Tetap'),
(2, 'Andri', 'Cimahi', '1994-10-10', 'Cimahi', '05/05', 'Cimahi', 'Cimahi', 'Islam', 'Kawin', 'Tetap');

-- --------------------------------------------------------

--
-- Table structure for table `tb_pengumuman`
--

CREATE TABLE IF NOT EXISTS `tb_pengumuman` (
  `kode_penugmuman` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `tanggal_publikasi` date NOT NULL,
  `konten` text NOT NULL,
  `sumber` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_pengumuman`
--

INSERT INTO `tb_pengumuman` (`kode_penugmuman`, `judul`, `tanggal_publikasi`, `konten`, `sumber`) VALUES
(1, 'Bakti Sosial', '2016-12-01', 'Kerja bakti dikawasan lingkungan Rukun Warga 10', 'Ketua RW');

-- --------------------------------------------------------

--
-- Table structure for table `tb_surat_pengantar`
--

CREATE TABLE IF NOT EXISTS `tb_surat_pengantar` (
  `no_surat` varchar(100) NOT NULL,
  `kode_keluarga` int(11) NOT NULL,
  `no_identitas` int(11) NOT NULL,
  `jenis_surat` varchar(255) NOT NULL,
  `tanggal_pengajuan` date NOT NULL,
  `tanggal_selesai` date NOT NULL,
  `status_pembuatan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_surat_pengantar`
--

INSERT INTO `tb_surat_pengantar` (`no_surat`, `kode_keluarga`, `no_identitas`, `jenis_surat`, `tanggal_pengajuan`, `tanggal_selesai`, `status_pembuatan`) VALUES
('001', 1, 1, 'Surat Kehilangan', '2016-12-04', '2016-12-06', 'Pendding');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_anggota_keluarga`
--
ALTER TABLE `tb_anggota_keluarga`
  ADD KEY `kode_keluarga` (`kode_keluarga`,`no_identitas`);

--
-- Indexes for table `tb_iuran`
--
ALTER TABLE `tb_iuran`
  ADD PRIMARY KEY (`kode_iuran`),
  ADD KEY `kode_keluarga` (`kode_keluarga`);

--
-- Indexes for table `tb_keluarga`
--
ALTER TABLE `tb_keluarga`
  ADD PRIMARY KEY (`kode_keluarga`),
  ADD KEY `no_identitas_kepala_keluarga` (`no_identitas_kepala_keluarga`);

--
-- Indexes for table `tb_penduduk`
--
ALTER TABLE `tb_penduduk`
  ADD PRIMARY KEY (`no_identitas`);

--
-- Indexes for table `tb_pengumuman`
--
ALTER TABLE `tb_pengumuman`
  ADD PRIMARY KEY (`kode_penugmuman`);

--
-- Indexes for table `tb_surat_pengantar`
--
ALTER TABLE `tb_surat_pengantar`
  ADD PRIMARY KEY (`no_surat`),
  ADD KEY `kode_keluarga` (`kode_keluarga`),
  ADD KEY `no_identitas` (`no_identitas`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_anggota_keluarga`
--
ALTER TABLE `tb_anggota_keluarga`
  ADD CONSTRAINT `tb_anggota_keluarga_ibfk_1` FOREIGN KEY (`kode_keluarga`) REFERENCES `tb_keluarga` (`kode_keluarga`);

--
-- Constraints for table `tb_iuran`
--
ALTER TABLE `tb_iuran`
  ADD CONSTRAINT `tb_iuran_ibfk_1` FOREIGN KEY (`kode_iuran`) REFERENCES `tb_keluarga` (`kode_keluarga`);

--
-- Constraints for table `tb_keluarga`
--
ALTER TABLE `tb_keluarga`
  ADD CONSTRAINT `tb_keluarga_ibfk_1` FOREIGN KEY (`no_identitas_kepala_keluarga`) REFERENCES `tb_penduduk` (`no_identitas`);

--
-- Constraints for table `tb_surat_pengantar`
--
ALTER TABLE `tb_surat_pengantar`
  ADD CONSTRAINT `tb_surat_pengantar_ibfk_2` FOREIGN KEY (`no_identitas`) REFERENCES `tb_penduduk` (`no_identitas`),
  ADD CONSTRAINT `tb_surat_pengantar_ibfk_1` FOREIGN KEY (`kode_keluarga`) REFERENCES `tb_keluarga` (`kode_keluarga`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
