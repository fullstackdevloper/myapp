<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Training extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('language');
        $this->load->helper('url');
        $this->load->helper('form');
        $this->load->model('user');
        $this->load->database(); 
    }
	public function index()
	{
		header('Access-Control-Allow-Origin: *'); 
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		
		$result['results'] = $this->user->getRoles();
		
		$row = json_encode($result);
		echo $row;
		
	}
	public function get_users()
	{
		header('Access-Control-Allow-Origin: *'); 
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		
		$result['results'] = $this->user->getUsers();
		
		$row = json_encode($result);
		echo $row;
	}
	public function user()
	{
		header('Access-Control-Allow-Origin: *'); 
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		$userid = $this->input->get('id');
		$result['results'] = $this->user->getUser($userid);
		
		$row = json_encode($result);
		echo $row;
	}
}
