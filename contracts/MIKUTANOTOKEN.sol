pragma solidity 0.5.0;


contract ERC20Interface {
    function totalSupply() public view returns (uint);
    function balanceOf(address tokenOwner) public view returns (uint balance);
    function transfer(address to, uint tokens) public returns (bool success);


    function allowance(address tokenOwner, address spender) public view returns (uint remaining);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

contract MIKUTANOTOKEN is ERC20Interface{

    string public constant name = "MIKUTANOTOKEN";
    string public constant symbol = "MIK";
    uint8 public constant decimals = 0; //si on rajoute 18 decimals, il faut multiplier la supply par 1 000000000000000000

    uint public supply;
    address public founder;
    mapping (address => uint) balances;
    mapping (address => mapping (address =>uint)) allowed; // mapping celui qui autorise, celui qui est autorise, le nombre de tokens.


    // allowed [compte 1][compte2] - montant --- compte du donneur d'ordre, compte qui est autorisé, montant autorisé.

    constructor () public {
        supply = 3000000; // si on rajoute 18 decimals, il faut multiplier la supply par 1 000000000000000000
        founder = msg.sender;
        balances[founder] = supply;
    }

    function totalSupply() public view returns (uint) {
        return supply;
    }
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public returns (bool success) {
        require(balances[msg.sender] >= tokens && tokens > 0);

        balances [to] += tokens;
        balances [msg.sender] -= tokens;
        emit Transfer (msg.sender, to, tokens);

        return true;
    }


    function allowance(address tokenOwner, address spender) public view returns (uint remaining) { // renvoie le nombre de tokens restants dans le compte du owner.
        return allowed[tokenOwner][spender];
    }


    function approve(address spender, uint tokens) public returns (bool success){
        require (balances[msg.sender] >= tokens);
        require (tokens > 0);

        allowed [msg.sender][spender] = tokens;
        emit Approval (msg.sender, spender, tokens);

        return true;
    }

    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        require(allowed[from][to] >= tokens);
        require(balances[from] > tokens);

        balances[from] -= tokens;
        balances[to] += tokens;
        allowed [from][to] -= tokens;

        return true;
    }

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
