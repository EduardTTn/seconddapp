pragma solidity 0.4.24;

contract ResumeVerifier {

    address owner;

    struct Applicant {
        string name;
        Date dob;
        string location;
        string email;

    }

    struct Date {
        int day;
        int month;
        int year;
    }

    struct Certificate {
        uint year;
        string institutionname;
        string name;
        bool approved;
        bool denied;
    }

    struct CertRequest {
        uint year;
        address requester;
        string ID;
        string certname;
        uint index;
        bool verified;
    }

    struct Job {
        string date;
        string companyname;
        string position;
        bool approved;
        bool denied;
    }

    struct JobRequest {
        uint monthsworked;
        string position;
        uint SSN;
        address requester;
        uint index;
        bool verified;
    }

    constructor  () public payable {
        owner = msg.sender;
    }

    //modifier for the functions that need to be accessed only by the owner
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier onlyInstitution() {
        require(institutionregistered[msg.sender]==true);
        _;
    }

    modifier onlyCompany() {
        require(companyregistered[msg.sender]==true);
        _;
    }

    mapping(address => Applicant) applicantinfo;//user's address have a corresponding struct Applicant that contains basic info
    mapping(address =>string)addresstoname;//the key is the user's address and the value is the name of the user
    mapping(address => bool)useregistered;//checks if an a
    mapping(address => bool)institutionregistered;
    mapping(string => address)institutionname;
    mapping(string => address)companyname;
    mapping(address => bool)companyregistered;
    mapping(address => Certificate[])certificates;
    mapping(address => Job[])jobs;
    mapping(address =>  CertRequest[])requestsCert;
    mapping(address =>  JobRequest[])requestsJob;
    mapping(string => address)emailtoaddress;
    mapping(address => uint)indexusersjobs;
    mapping(address => uint)indexuserscerts;


    //checks if an address is the owner of the contract
    function checkIfOwner(address _addr) public view returns (bool) {
        return _addr == owner;
    }

    //registers an address of an institution
    function addInstitution (address _addr, string _name) public onlyOwner {
        require(institutionregistered[_addr] == false, 'Institution already registered');
        institutionregistered[_addr] = true;
        institutionname[_name]=_addr;

    }

    //registers an address of a company
    function addCompany (address _addr, string _name) public onlyOwner {
        require(companyregistered[_addr ]== false, 'Company already registered');
        companyregistered[_addr]= true;
        companyname[_name]=_addr;
    }

    //registers an address of an user
    function registerUser (string _name, int _day, int _month, int _year, string _location, string _email) public {
        require(useregistered[msg.sender]==false, 'User already registered');
        useregistered[msg.sender]=true;
        Date memory dob = Date(_day, _month, _year);
        Applicant memory applicant = Applicant(_name, dob, _location, _email);
        applicantinfo[msg.sender] = applicant;
        emailtoaddress[_email]=msg.sender;

    }

    //returns the eth address of an user based on email
    function getAddress( string _email) public view returns (address) {
        return emailtoaddress[_email];
    }

    //the user adds a certificate cv and certifocate request to the institution
    function addCertificate( uint _year, string _institutionname, string _name, string _ID) public {
        require(useregistered[msg.sender]==true);
        CertRequest memory request = CertRequest(_year, msg.sender, _ID, _name, indexuserscerts[msg.sender], false);
        Certificate memory certificate = Certificate(_year, _institutionname, _name, false, false);
        address addr = institutionname[_institutionname];
        requestsCert[addr].push(request);
        certificates[msg.sender].push(certificate);
        indexuserscerts[msg.sender]++;

    }

    //the user adds a job  to his cv and a job request to the company
    function addJob(string _monthhired, string _monthleft, string _yearhired, string _yearleft,  string _position, string _companyname, uint _SSN) public {
        require(useregistered[msg.sender]==true);
        string memory date = _monthhired + "/"+_yearhired + '-' +_monthleft + "/"+ _yearleft;
        string memory name = applicantinfo[msg.sender].name;
        JobRequest memory request = JobRequest(date, _position, _SSN, msg.sender, indexusersjobs[msg.sender], false);
        Job memory job = Job(_monthsworked, _companyname, _position, false, false);
        address addr = companyname[_companyname];
        requestsJob[addr].push(request);
        jobs[msg.sender].push(job);
        indexusersjobs[msg.sender]++;
    }

    //function for the company to approve a request
    function approveRequestJob(uint _index) public onlyCompany {
        address requestaddr = requestsJob[msg.sender][_index].requester;
        jobs[requestaddr][requestsJob[msg.sender][_index].index].approved=true;
        requestsJob[msg.sender][_index].verified = true;
    }

    //function for the company to deny a request
    function denyRequestJob(uint _index) public onlyCompany {
        address requestaddr = requestsJob[msg.sender][_index].requester;
        jobs[requestaddr][requestsJob[msg.sender][_index].index].denied=true;
        requestsJob[msg.sender][_index].verified = true;
    }

    //function for the institution to approve a request
    function approveRequestCertificate(uint _index) public onlyInstitution{
        address requestaddr = requestsCert[msg.sender][_index].requester;
        certificates[requestaddr][requestsCert[msg.sender][_index].index].approved=true;
        requestsCert[msg.sender][_index].verified = true;
    }

    //function for the institution to deny a request
    function denyRequestCertificate(uint _index) public onlyInstitution{
        address requestaddr = requestsCert[msg.sender][_index].requester;
        certificates[requestaddr][requestsCert[msg.sender][_index].index].denied=true;
        requestsCert[msg.sender][_index].verified = true;
    }

    //returns information about a user's past job
    function getJob(address _addr, uint _index) public view returns(string, string, string, bool, bool) {
        return(jobs[_addr][_index].date, jobs[_addr][_index].companyname,  jobs[_addr][_index].position, jobs[_addr][_index].approved, jobs[_addr][_index].denied );
    }

    //returns the number of jobs listed by a user
    function getJobCount(address _addr) public view returns (uint) {
        return jobs[_addr].length;
    }

    //returns information about a user's certificate
    function getCertificate(address _addr, uint _index) public view returns(uint, string, string, bool, bool) {
        return(certificates[_addr][_index].year, certificates[_addr][_index].institutionname, certificates[_addr][_index].name,certificates[_addr][_index].approved, certificates[_addr][_index].denied);
    }

    //returns the number of certificates of a user
    function getCertificateCount(address _addr) public view returns(uint) {
        return certificates[_addr].length;
    }

    //checks if a user is registered
    function isRegistered(address _addr) public view returns (bool) {
        return useregistered[_addr];
    }

    //checks if an address is of an institution
    function isInstitution(address _addr) public view returns (bool){
        return institutionregistered[_addr];
    }

    //checks if an address is of a company
    function isCompany(address _addr) public view returns (bool){
        return companyregistered[_addr];
    }

    //returns a certificate request for validation
    function getCertRequest(uint _index) public view returns (uint, address, string, string, uint, bool){
        return(requestsCert[msg.sender][_index].year,  requestsCert[msg.sender][_index].requester,  requestsCert[msg.sender][_index].ID, requestsCert[msg.sender][_index].certname, requestsCert[msg.sender][_index].index, requestsCert[msg.sender][_index].verified);
    }

    //returns the number of  cert requests for an institution to be validated
    function getCertRequestCount() public view returns (uint){
        return requestsCert[msg.sender].length;
    }

    //returns a job request for validation
    function getJobRequest(address _addr, uint _index) public view returns (string, string, uint, address,  uint, bool){
        return(requestsJob[_addr][_index].date,  requestsJob[_addr][_index].position,  requestsJob[_addr][_index].SSN, requestsJob[_addr][_index].requester, requestsJob[_addr][_index].index, requestsJob[_addr][_index].verified);
    }

    //returns the number of job requests to be validated by a company
    function getJobRequestCount(address _addr) public view returns (uint) {
        return requestsJob[_addr].length;
    }

    //returns the basic info of a registered user
    function getBasicInfo(address _addr) public view returns (string, int, int, int, string, string) {
        require (useregistered[_addr] == true);
        return (applicantinfo[_addr].name, applicantinfo[_addr].dob.day, applicantinfo[_addr].dob.month, applicantinfo[_addr].dob.year, applicantinfo[_addr].location, applicantinfo[_addr].email );
    }

}