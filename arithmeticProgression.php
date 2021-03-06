/* my solution to a codewars kata training for the Arithmetic progression
and finding a missing number in the progression given an array of numbers */

function findMissing($numbers) {
        
    $n = sizeof($numbers)-1;
    
    while ( $n > 0 ) {
    
      $testArith = $numbers[$n] - $numbers[$n-1]; /* set the arithmetic difference for the first pair */
        
        /* the following loop checks the next pair of numbers to see if they match the arithmetic difference, if it does then it
           will continue to the next set. If it does not match the arithmetic difference it is now set as the new difference. 
           Then it will return the missing number */

      if ($testArith != $numbers[($n-1)] - $numbers[($n-2)]) {
        
        $setMark = $testArith;
      
        $testArith = $numbers[($n-1)] - $numbers[($n-2)];
        
        if (($numbers[$n] - $testArith) != $numbers[($n-1)]){
        
          return $numbers[$n] - $testArith;
      
      }
      
      else {
      
        return $numbers[$n] - $setMark;
      
      }     
      
      
      $n--;
      
    }
    
  }
    
 }
