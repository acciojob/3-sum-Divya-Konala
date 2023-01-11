function threeSum(arr, target) {
  //your code here
	arr.sort();
	let n=arr.length;
	let least_sum=arr[0]+arr[1]+arr[2];
	let least_diff=target-least_sum;
	least_diff=(least_diff>=0)?least_diff:-least_diff;
	let i=0,j=1,k=2;
	while(i<n && j<n && k<n){
		let curr_sum=arr[i]+arr[j]+arr[k];
		let curr_diff=target-curr_sum;
		curr_diff=(curr_diff>=0)?curr_diff:-curr_diff;
		if(curr_sum>=target){
			return least_sum;
		}else{
			if(k<n-1) k++
			else if(j<n-2){
				j++; k=j+1;
			}else if(i<n-3){
				i++; j=i+1;k=j+2;
			}else{
				return least_sum;
			}
		}
	}
}
module.exports = threeSum;
