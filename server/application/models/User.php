<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User extends CI_Model
{
    function __construct()
    {
		parent::__construct();
		$this->load->database(); 
    }
    
	public function getRoles()
	{
		$query = $this->db->get('role');
		return $query->result();
	}
	public function getUsers()
	{
		$query = $this->db->get('users');
		return $query->result();
	}
	public function getUser($userid)
	{
		$query = $this->db->get_where('users',array('id' => $userid));
		return $query->result();
	}	
	public function updateUser($userid,$arr)
	{
		$data=$arr;
		$this->db->where('id',$userid);
		$this->db->update('users',$data);
	}
}