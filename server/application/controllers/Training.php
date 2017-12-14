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
	
	public function getpermissionroles()
	{
		header('Access-Control-Allow-Origin: *'); 
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		@$useridd = $request->useridd;
		$userPermission = $this->user->getUser($useridd);
		$permission = json_decode($userPermission[0]->permission);
		$roles = $this->user->getRoles();
		
		$perroles = array();
		foreach($roles as $key=>$role)
		{
			$perroles[$key]['id'] = $role->id;
			$perroles[$key]['role_name'] = $role->role_name;
			if(in_array($role->id,$permission))
			{
				$perroles[$key]['allow'] = 'checked';
			}
			else
			{
				$perroles[$key]['allow'] = '';
			}
		}
		$result['results']=$perroles;
		$row = json_encode($result);
		echo $row;
	}
	function updatepermissionroles()
	{
		header('Access-Control-Allow-Origin: *'); 
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		@$permissionkey = $request->permissionkey;
		@$useridd = $request->useridd; 
		$userPermission = $this->user->getUser($useridd);
		$permission = json_decode($userPermission[0]->permission);
		array_push($permission,$permissionkey);
		$roleupdate =  json_encode(array_unique($permission));
		$arr = array('permission'=>$roleupdate);
		$this->user->updateUser($useridd,$arr);
		echo 'done';
	}
	function removepermissionroles()
	{
		header('Access-Control-Allow-Origin: *'); 
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		@$permissionkey = $request->permissionkey;
		@$useridd = $request->useridd; 
		$userPermission = $this->user->getUser($useridd);
		$permission = json_decode($userPermission[0]->permission);
		$permissionkey = array($permissionkey);
		$dd=array_diff($permission,$permissionkey);
		$roleupdate =  json_encode(array_unique($dd));
		$arr = array('permission'=>$roleupdate);
		$this->user->updateUser($useridd,$arr);
		echo 'done';
	}
	
	
}
